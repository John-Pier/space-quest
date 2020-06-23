import {animate, style, transition, trigger} from "@angular/animations";

export const routerAnimations = trigger("routerAnimations", [
    transition(":enter", [
        style({
            transform: "matrix(1, 0, 0.05, 1, -50, -100)",
            opacity: "0",
        }),
        animate("0.4s ease-out", style({
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                opacity: "1",
            })
        ),
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
