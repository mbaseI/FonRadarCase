import { useTranslation } from "react-i18next"
import { Dropdown } from "react-bootstrap"

function LanguageSelector() {
  const { t, i18n } = useTranslation()

  const rtlLanguages = [
    "heb"
  ]

  const changeToRtl = (eventKey: string | null) => {
    const html = document.getElementsByTagName('html')[0]
    html.style.direction = rtlLanguages.includes(eventKey as string) ? 'rtl' : 'ltr'
  }

  const changeLanguage = (eventKey: string | null) => {
    i18n.changeLanguage(eventKey!)
    changeToRtl(eventKey)

  }

  return (
    <div>
      <Dropdown onSelect={changeLanguage}>
        <Dropdown.Toggle style={{ width: '100%' }} variant="success" id="dropdown-basic">
          {t("button.language")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="text-end" eventKey={"tr"}>{"Türkçe"}</Dropdown.Item>
          <Dropdown.Item className="text-end" eventKey={"en"}>{"English"}</Dropdown.Item>
          <Dropdown.Item className="text-end" eventKey={"ch"}>{"自从"}</Dropdown.Item>
          <Dropdown.Item className="text-end" eventKey={"heb"}>{"עִברִית"}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default LanguageSelector
