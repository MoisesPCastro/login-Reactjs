
export const showSuccess = (messages) => {
    messages.current.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

export const showInfo = (messages) => {
    messages.current.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
}

export const showWarn = (messages) => {
    messages.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
}

export const showError = (messages) => {
    messages.current.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
}