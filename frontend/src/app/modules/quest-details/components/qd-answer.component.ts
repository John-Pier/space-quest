import {Component, HostBinding, Input, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {finalize, take, tap} from "rxjs/operators";
import {ID} from "../../../core/base.types";
import {flashAnimations} from "../../../core/core.animations";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsNavigationService} from "../services/qd-navigation-helper.service";
import {SPQQuestDetailsService} from "../services/quest-details.service";
import {SPQActionsPopupResult} from "../types/actions-popup-result";
import {SPQFinishActionPopupComponent} from "./embed/finish-action-popup.component";
import {SPQHintPopupComponent} from "./embed/hint-popup.component";

@Component({
    selector: "spq-qd-answer",
    templateUrl: "qd-answer.component.html",
    providers: [
        MatDialog
    ],
    animations: [
        flashAnimations
    ]
})
export class SPQQuestDetailsAnswerComponent implements OnChanges, OnDestroy {

    public _hintsUsed: boolean = false;

    public _failureAnswer: boolean = false;

    public _attemptsModel = [
        {
            attemptSpent: false
        },
        {
            attemptSpent: false
        },
        {
            attemptSpent: false
        }
    ];

    public _localLoading: boolean = false;

    public _answerFormGroupModel: FormGroup;

    public _tooltipArray: boolean[] = [];

    @Input()
    public questTask: SPQQuestTask;

    private nextTaskId: ID = "";

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor(private dialogService: MatDialog,
                private questDetailsService: SPQQuestDetailsService,
                private navigationService: SPQQuestDetailsNavigationService) {
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes["questTask"]) {
            this.initAnswerForm();
            this.subscribeToGetTooltipsCount();
        }
    }

    public s() {
        this.initAnswerForm();
        this.subscribeToGetTooltipsCount();
    }

    public _onSubmitClick(answer: string): void {
        this.subscribeToCheckAnswer(answer);
    }

    public _onHintsClick(count: number) {
        if (!this._tooltipArray[count]) {
            this._tooltipArray[count] = true;
            this.openHintsDialog(count);
        }
    }

    public _trackByAttemptSpentFn(index: number, attempt): string {
        return "" + index + attempt.attemptSpent.toString();
    }

    public ngOnDestroy() {
        // this.subscription.forEach(el => el.unsubscribe());
    }

    private initAnswerForm(): void {
        this._answerFormGroupModel = new FormGroup({
            answerInput: new FormControl("", [Validators.required, Validators.min(1)])
        });
    }

    private subscribeToGetTooltipsCount(): void {
        this.questDetailsService.getQuestTooltipCountByLvl(this.questTask.uuid)
            .pipe(
                take(1),
                tap(count => {
                    this._tooltipArray = new Array(count).fill(false);
                })
            )
            .subscribe();
    }

    private updateAttemptsModel(): void {
        this._attemptsModel.pop();
        this._attemptsModel.unshift({
            attemptSpent: true
        });
    }

    private subscribeToCheckAnswer(answer: string): void {
        this._localLoading = true;
        this.questDetailsService.setQuestAnswer(this.questTask.uuid, answer)
            .pipe(
                take(1),
                tap(response => {
                    this._failureAnswer = !response.isPassed;
                    if (this._failureAnswer) {
                        this.updateAttemptsModel();
                        this.setAnswerFormError();
                    } else {
                        this.nextTaskId = response.currentTaskId;
                        this.clearField();
                        this.openFinishDialogAndSubscribeToClose(!response.isAllPassed && !!response.currentTaskId);
                    }
                }),
                finalize(() => {
                    this._localLoading = false;
                })
            )
            .subscribe();
    }

    private setAnswerFormError(): void {
        this._answerFormGroupModel.controls["answerInput"].setErrors({ ["answerError"]: "Ответ не верный" });
    }

    private clearField(): void {
        this._answerFormGroupModel.patchValue({
            answerInput: ""
        }, {
            emitEvent: false
        });
    }

    private openFinishDialogAndSubscribeToClose(hasNext: boolean): void {
        this.dialogService.open<SPQFinishActionPopupComponent, boolean, SPQActionsPopupResult>(SPQFinishActionPopupComponent, {
            data: hasNext
        })
            .afterClosed()
            .pipe(
                take(1),
                tap(result => this.navigateFromPopupResult(result))
            )
            .subscribe();
    }

    private openHintsDialog(lvl: number): void {
        this.questDetailsService.getQuestTooltipByLvl(this.questTask.uuid, lvl + 1)
            .pipe(
                take(1),
                tap(hints => {
                    this.dialogService.open(SPQHintPopupComponent, { data: hints.text });
                })
            )
            .subscribe();
    }

    private navigateFromPopupResult(result: SPQActionsPopupResult): void {
        switch (result) {
            case SPQActionsPopupResult.BACK:
                this.navigationService.navigateToQuestFlow();
                break;
            case SPQActionsPopupResult.NEXT:
                this.nextTaskId
                    ? this.navigationService.navigateToNextQuestDetails(this.nextTaskId)
                    : this.navigationService.navigateToQuestFlow();
                break;
            default:
                throw new Error("Unknown value of SPQActionsPopupResult");
        }
    }
}
