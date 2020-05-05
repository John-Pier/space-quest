export type SPQQuestCube = Readonly<{
    id: string,
    title: string,
    subtitle: string,
    serialNumber: number,
    isSelected?: boolean
}>

export type SPQQuestFlowConfig = Partial<{
    showLinks: boolean
}>

export type SPQQuestFlow = Readonly<{
    id: string,
    nodes: SPQQuestCube[]
}>
