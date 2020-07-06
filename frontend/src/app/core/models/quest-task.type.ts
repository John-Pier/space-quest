import {ID} from "../base.types";

export type SQPQuestPart = {
    uuid: ID,
    name: string,
    flows: SPQQuestFlow[],
    currentFlowId: ID
};

export type SQPQuestPartBrief = {
    uuid: ID,
    name: string,
    flowBriefs: SPQQuestFlowBrief[]
};

export type SPQQuestTask = Readonly<{
    uuid: ID,
    sectionUUID: ID,
    title: string,
    subtitle: string,
    url: string,
    text: string,
    serialNumber: number,
    passed: boolean,
    selected: boolean
}>;

export type SPQQuestTaskBrief = Readonly<{
    id: ID,
    title: string,
    subtitle: string,
    serialNumber: number,
    passed: boolean,
    selected: boolean
    // TODO -> Может добавить превью вопроса как на моках ?
}>;

export type SPQQuestFlow = Readonly<{
    id: ID,
    name: string,
    nodes: SPQQuestTaskBrief[], // Если !passed и !selected - []
    passed: boolean,
    selected: boolean,
    currentTaskId: ID // Если !passed и !selected - null
}>;

export type SPQQuestFlowBrief = Readonly<{
    id: ID,
    name: string,
    text: string,
    url: string,
    passed: boolean,
    selected: boolean,
    currentTaskId: ID // Если !passed и !selected - null
}>;
