import {ID} from "../../../core/base.types";

export type SPQQuestTooltip = Readonly<{
    uuid: ID;
    level: number;
    text: string;
    url?: string;
}>;

export type SPQQuestTooltipRequest = Readonly<{
      taskUUID: ID;
      lvl: number;
}>;
