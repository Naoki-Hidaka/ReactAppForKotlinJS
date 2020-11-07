import kotlinx.browser.document
import react.dom.render
import view.App

fun main() {
    render(document.getElementById("root")) {
        child(App::class) { }
    }
}