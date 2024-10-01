const TYPE_TEMPLATE = () => `
type Actions = {
    [key:string]: any;
};

type States = {
    [key:string]: any;
};

export type ControllerType = {
    controller: {
        actions: Actions;
        states: States
    }
};

// IOC
export type ControllerInjectType = {
    [key:string]: string
}
`;

export default TYPE_TEMPLATE;