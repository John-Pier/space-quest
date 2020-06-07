import {ID} from "../../../core/base.types";

export type SPQQuestAnswer = Readonly<{
    taskUUID: ID;
    answer: string;
}>;

export type SPQQuestAnswerResponse = Readonly<{
    currentTaskId: ID;
    isPassed: boolean;
    isAllPassed: boolean;
}>;
