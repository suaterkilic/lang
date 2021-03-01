import { version } from 'next-i18next/package.json'
import { useTranslation } from 'next-i18next'


const Footer = () => {
    const { t } = useTranslation('footer')
    return(
        <h1>{t('description')}</h1>
    )
}

export default Footer;