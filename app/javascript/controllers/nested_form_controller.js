import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['add_task', 'template']

  add_association(event) {
    event.preventDefault()
    const content = this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Date.now())
    this.add_taskTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_association(event) {
    event.preventDefault()
    const item = event.target.closest('.nested-fields')
    item.querySelector("input[name*='_destroy']").value = 1
    item.style.display = 'none'
  }
}
