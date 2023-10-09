import React, { useRef, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import './Page.css';

const Page = () => {
    const html = useSelector(state => state.html);
    const css = useSelector(state => state.css);
    const js = useSelector(state => state.js);
    const page = useRef(null);

    const [htmlMarkup, setHtmlMarkup] = useState();

    React.useEffect(() => {
        const script = document.createElement('script');
        script.defer = true;
        script.innerText = js.replace('document.body', 'document.querySelector(".Page")');
        let newHTML = html.replace('<body>', '');
        let newCSS = css.replace('*', '.Page > *');
        newHTML = html.replace('</body>', '');
        setHtmlMarkup({ __html: html + `<style>${newCSS}</style>` });

        page.current.appendChild(script);
    },[]);

    return (
        <div dangerouslySetInnerHTML={htmlMarkup} ref={ page } className="Page m-2">
        </div>
    )
}

export default Page;