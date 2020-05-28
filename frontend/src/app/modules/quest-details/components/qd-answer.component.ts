import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {SPQQuestTask} from "../../../core/models/quest-task.type";

@Component({
    selector: "spq-qd-answer",
    templateUrl: "qd-answer.component.html",
})
export class SPQQuestDetailsAnswerComponent implements OnInit {

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

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor() {}

    public ngOnInit() {}

    public _onSubmitClick(answer: string): void {
        if (!answer) {
            return;
        }
        this._failureAnswer = this.questTask.answer.toString() !== answer.toString();
        if (this._failureAnswer) {
            this._attemptsModel.pop();
            this._attemptsModel.unshift({
                attemptSpent: true
            });
        }
        //
    }

    public _onHintsClick() {
        this._hintsUsed = true;
        //
    }

    public _trackByAttemptSpentFn(index: number, attempt): string {
        return "" + index + attempt.attemptSpent.toString();
    }
}
