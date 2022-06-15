import LayoutHandler from "./layout/LayoutHandler";
import DefaultLayoutPage from "./layout/default/DefaultLayoutPage";

const contentElement = document.getElementById('content')

const layoutHandler = new LayoutHandler(contentElement, new DefaultLayoutPage())
setTimeout(() => {
    layoutHandler.load()
}, 100)