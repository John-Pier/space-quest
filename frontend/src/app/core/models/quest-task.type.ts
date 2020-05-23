import {ID} from "../base.types";

export enum SPQQuestTaskUrlType {
    VIDEO = "video",
    PICTURE = "picture"
}

export type SPQQuestTask = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    type: SPQQuestTaskUrlType
    url: string,
    text: string,
    answer: any, // TODO -> specify
    serialNumber: number
}>;

export type SPQQuestTaskBrief = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    serialNumber: number
    // TODO -> Может добавить превью вопроса как на моках ?
}>;

export type SPQQuestFlow = Readonly<{
    id: ID,
    nodes: SPQQuestTaskBrief[],
    currentTaskId: ID
}>;
