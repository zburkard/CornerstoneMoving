import { AppState } from "../AppState"

class PageService {

    goTo(refName) {
        AppState.pageSection = refName
    }

}


export const pageService = new PageService()