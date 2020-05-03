export enum SPQRoutesString {
    SPQ_MAIN = "main",
    SPQ_AUTH = "auth",
    SPQ_TIMELINE = "timeline",
    SPQ_QUEST = "quest",
    SPQ_QUEST_STEP = "quest:id",
    SPQ_USER_PROFILE = "profile",
    SPQ_NOT_FOUND = "not-found"
}

export const SPQRoutesMap = {
    [SPQRoutesString.SPQ_MAIN]: "/" + SPQRoutesString.SPQ_MAIN,
    [SPQRoutesString.SPQ_TIMELINE]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_TIMELINE,
    [SPQRoutesString.SPQ_USER_PROFILE]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_USER_PROFILE,
    [SPQRoutesString.SPQ_QUEST]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_QUEST,
    [SPQRoutesString.SPQ_AUTH]: "/" + SPQRoutesString.SPQ_AUTH,
};

