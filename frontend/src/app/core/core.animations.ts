import {animate, style, transition, trigger} from "@angular/animations";

export const routerAnimations = trigger("routerAnimations", [
    transition(":enter", [
        style({
            transform: "scale(0.1)",
            opacity: "0.1",
        }),
        animate("0.4s ease-in", style({
            transform: "scale(1)",
            opacity: "1"
        }))
    ]),
]);

export const flashAnimations = trigger("flashAnimations", [
    transition(":enter", [
        style({
            opacity: "0.1",
        }),
        animate("0.3s ease-in", style({
            opacity: "1"
        }))
    ]),
    transition(":leave", [
        animate("0.3s ease-out", style({
            opacity: "0.1",
        }))
    ]),
]);
