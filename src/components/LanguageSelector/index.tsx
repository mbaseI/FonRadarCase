import { useTranslation } from "react-i18next"
import { Dropdown } from "react-bootstrap"

function LanguageSelector() {
  const { t, i18n } = useTranslation()


  return (
    <div>
      <Dropdown onSelect={(eventKey, e) => i18n.changeLanguage(eventKey!)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {t("button.language")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={"tr"}>{t("button.turkish")}</Dropdown.Item>
          <Dropdown.Item eventKey={"en"}>{t("button.english")}</Dropdown.Item>
          <Dropdown.Item eventKey={"ch"}>{t("button.chinese")}</Dropdown.Item>
          <Dropdown.Item eventKey={"heb"}>{t("button.hebrew")}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default LanguageSelector
