import React, { useRef } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import './Page.css';

const Page = () => {
    const html = useSelector(state => state.html);
    const css = useSelector(state => state.css);
    const js = useSelector(state => state.js);
    const page = useRef(null);
    const htmlMarkup = { __html: html + `<style>${css}</style>` };

    React.useEffect(() => {
        const script = document.createElement('script');
        script.defer = true;
        script.innerText = js;

        page.current.appendChild(script);
    },[]);

    return (
        <div dangerouslySetInnerHTML={htmlMarkup} ref={ page } className="Page m-2">
        </div>
    )
}

export { Page };