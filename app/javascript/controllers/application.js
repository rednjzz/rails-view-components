import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

// viewCompoents in app/views/components
import viewComponentControllers from "./../../views/components/**/controller.js"

viewComponentcontrollers.forEach(controller => {
    const { name, module } = controller

    // Tidy up controller name
    // ..--..--views--components--video-reviewer--controller.js => video-reviewer-controller
    const controllerName = name.replaceAll('..--..--views--components--', '').replaceAll('--controller.js', '')
    application.register(controllerName, module.default)
})

export { application }
