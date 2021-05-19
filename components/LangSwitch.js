import{useRouter} from 'next/router'
import{useState} from 'react'

import bg from '../locales/bg'
import en from '../locales/en'


const LangSwitch = () => {
    
const router = useRouter()
const { locale } = router
const t = locale === 'bg' ? bg : en

const changeLanguage = (e) => {
    const locale = e.target.value
    e.preventDefault();
    router.push(router.pathname, router.asPath, { locale });
    }

    const [language, setLanguage] = useState('bg');

   

    return ( 
        <div className="wrapper">
           <form className="form">
	        <div className="switch-field">
                <input type="radio" id="radio-one" name="switch-one" value="bg" onClick={changeLanguage} defaultValue={locale} defaultChecked={language ==='bg'} />
                <label for="radio-one">БГ</label>
                <input type="radio" id="radio-two" name="switch-one" value="en" onClick={changeLanguage} defaultChecked={language ==='en'}/>
                <label for="radio-two">EN</label>
	        </div>
        </form>
            <style jsx>{`
            .switch-field {
                display: flex;
                margin-bottom: 36px;
                overflow: hidden;
            }
            
            .switch-field input {
                position: absolute !important;
                clip: rect(0, 0, 0, 0);
                height: 1px;
                width: 1px;
                overflow: hidden;
            }
            
            .switch-field label {
                font-weight: bold;
                color: #333333;
                font-size: 8px;
                text-align: center;
                padding: 3px 9px;
                border: 1px solid #333333;
            }
            
            .switch-field label:hover {
                cursor: pointer;
            }
            
            .switch-field input:checked + label {
                background-color: #dedede;
            
            }
            
            .switch-field label:first-of-type {
                border-right: none;
            }
            
            .switch-field label:last-of-type {
                border-left: none;
            }
            @media only screen and (max-width: 600px) {
                .switch-field {
                    display: flex;
                    margin-top: 10px;
                    overflow: hidden;
                }
            }
            `}</style>
        </div>
     );
}
 
export default LangSwitch;