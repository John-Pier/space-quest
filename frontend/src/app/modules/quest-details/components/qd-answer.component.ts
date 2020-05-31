import {Component, HostBinding, Input, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {take, tap} from "rxjs/operators";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsNavigationService} from "../services/qd-navigation-helper.service";
import {SPQActionsPopupResult} from "../types/actions-popup-result";
import {SPQFinishActionPopupComponent} from "./embed/finish-action-popup.component";
import {SPQHintPopupComponent} from "./embed/hint-popup.component";

@Component({
    selector: "spq-qd-answer",
    templateUrl: "qd-answer.component.html",
    providers: [
        MatDialog
    ]
})
export class SPQQuestDetailsAnswerComponent implements OnInit, OnDestroy {

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

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor(private dialogService: MatDialog,
                private navigationService: SPQQuestDetailsNavigationService) {}

    public ngOnInit() {
        this.initAnswerForm();
    }

    public _onSubmitClick(answer: string): void {
        // TODO -> refactoring - answer not in model now
        this._failureAnswer = this.questTask.answer.toString() !== answer.toString();
        if (this._failureAnswer) {
            this.updateAttemptsModel();
            this.setAnswerFormError();
        } else {
            this.openFinishDialogAndSubscribeToClose();
        }
    }

    public _onHintsClick() {
        if (!this._hintsUsed) {
            this._hintsUsed = true;
            this.openHintsDialog();
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

    private updateAttemptsModel(): void {
        this._attemptsModel.pop();
        this._attemptsModel.unshift({
            attemptSpent: true
        });
    }

    private setAnswerFormError(): void {
        this._answerFormGroupModel.controls["answerInput"].setErrors({ ["answerError"]: "Ответ не верный" });
    }

    private openFinishDialogAndSubscribeToClose(): void {
        this.dialogService.open<SPQFinishActionPopupComponent, boolean, SPQActionsPopupResult>(SPQFinishActionPopupComponent, {
            data: this.navigationService.nextQuestDetailsIsExist()
        })
            .afterClosed()
            .pipe(
                take(1),
                tap(result => this.navigateFromPopupResult(result))
            )
            .subscribe();
    }

    private openHintsDialog(): void {
        // TODO -> refactoring -> Запрос на срерв - подписка и открытие окна
        this.dialogService.open(SPQHintPopupComponent, { data: this.questTask.answer });
    }

    private navigateFromPopupResult(result: SPQActionsPopupResult): void {
        switch (result) {
            case SPQActionsPopupResult.BACK:
                this.navigationService.navigateToQuestFlow();
                break;
            case SPQActionsPopupResult.NEXT:
                this.navigationService.navigateToNextQuestDetails();
                break;
            default:
                throw new Error("Unknown value of SPQActionsPopupResult");
        }
    }
}
