export const getWhatsapp = (phone = '',text = '') => {
    return 'https://'+ (window.screen.width < 992 ? 'api' : 'web') + '.whatsapp.com/send?' + (phone !== '' ? "&phone=" + phone : '') + (text !== '' ? '&text=' + text  : '') 
}