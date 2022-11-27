import { useTranslation } from "react-i18next"
import LanguageSelector from "../../components/LanguageSelector";


function Detail() {
  const { t } = useTranslation()
  return (
  <>
   <LanguageSelector/>
   <div>{t("title.login")}</div>
   </>
  );
}

export default Detail;
