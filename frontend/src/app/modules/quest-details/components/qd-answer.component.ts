import {Component, HostBinding, Input, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {Subscription} from "rxjs";
import {take, tap} from "rxjs/operators";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQNavigationService} from "../../../services/navigation.service";
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

    private subscription: Subscription[] = [];

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor(private dialogService: MatDialog,
                private navigationService: SPQNavigationService) {}

    public ngOnInit() {
        this._answerFormGroupModel = new FormGroup({
            answerInput: new FormControl("", [Validators.required, Validators.min(1)])
        });
    }

    public _onSubmitClick(answer: string): void {
        if (this._answerFormGroupModel.valid) {
            this._failureAnswer = this.questTask.answer.toString() !== answer.toString();
            if (this._failureAnswer) {
                this._attemptsModel.pop();
                this._attemptsModel.unshift({
                    attemptSpent: true
                });
                this._answerFormGroupModel.controls["answerInput"].setErrors({ ["answerError"]: "Ответ не верный" });
            }
            if (!this._failureAnswer) {
                this.openFinishDialog();
            }
        }
    }

    public _onHintsClick() {
        if (!this._hintsUsed) {
            this.openHintsDialog();
            this._hintsUsed = true;
        }
    }

    public _trackByAttemptSpentFn(index: number, attempt): string {
        return "" + index + attempt.attemptSpent.toString();
    }

    public ngOnDestroy() {
        this.subscription.forEach(el => el.unsubscribe());
    }

    private openFinishDialog(): void {
        this.dialogService.open(SPQFinishActionPopupComponent)
            .afterClosed()
            .pipe(
                take(1),
                tap(() => {
                    this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST]);
                })
            )
            .subscribe();
    }

    private openHintsDialog(): void {
        this.dialogService.open(SPQHintPopupComponent, { data: this.questTask.answer });
    }
}
