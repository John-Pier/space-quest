import {TestBed} from "@angular/core/testing";
import {SPQNavigationHistoryService} from "../../services/navigation-history.service";

describe("NavigationHistoryService", () => {
    let historyService: SPQNavigationHistoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SPQNavigationHistoryService]
        });
        historyService = TestBed.get(SPQNavigationHistoryService);
    });

    it("should be created", () => {
        expect(historyService)
            .toBeDefined("SPQNavigationHistoryService not configure");
    });

    it("should have initial state", () => {
        historyService.reset();
        expect(historyService.previousURL)
            .toBeNull("previousURL should be null");
        expect(historyService.lastURL)
            .toBeNull("lastURL should be null");
        expect(historyService.isHistoryEmpty())
            .toBeTruthy();
        expect(() => {
            historyService.popRouteFromHistory();
        })
            .toThrowError("Routes history is empty!");
    });

    it("should be spry add unique urls", () => {
        historyService.reset();

        historyService.addRouteToHistory("1");
        historyService.addRouteToHistory("1");

        expect(historyService.previousURL)
            .toBeNull();
        expect(historyService.lastURL)
            .toBe("1");
        expect(historyService.isHistoryEmpty())
            .toBeTruthy("history should be empty");
    });

    it("should be works unique urls filter", () => {
        historyService.reset();

        historyService.addRouteToHistory("1");
        historyService.addRouteToHistory("2");
        historyService.addRouteToHistory("1");

        expect(historyService.previousURL)
            .toBeNull();
        expect(historyService.lastURL)
            .toBe("1");
        expect(historyService.isHistoryEmpty())
            .toBeTruthy("history should be empty");
    });

    it("should be works pop method", () => {
        historyService.reset();

        historyService.addRouteToHistory("1");
        historyService.addRouteToHistory("2");
        historyService.addRouteToHistory("3");

        expect(historyService.previousURL)
            .toBe("2");
        expect(historyService.lastURL)
            .toBe("3");
        expect(historyService.isHistoryEmpty())
            .toBeFalsy();

        expect(historyService.popRouteFromHistory())
            .toBe("2");
        expect(historyService.previousURL)
            .toBe("1");
        expect(historyService.lastURL)
            .toBe("2");
        expect(historyService.isHistoryEmpty())
            .toBeFalsy();
    });
});
