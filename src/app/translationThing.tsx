'use client';
import { useEffect } from "react";

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate: {
                TranslateElement: {
                    new (
                        options: {
                            pageLanguage: string;
                            includedLanguages?: string;
                            layout?: unknown;
                        },
                        elementId: string
                    ): unknown;
                    InlineLayout: {
                        SIMPLE: unknown;
                    };
                };
            };
        };
    }
}

function TranslationThing() {
    useEffect(() => {
        const scriptId = "google-translate-script";

        window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,es,fr,zh,fi,ur",
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            }
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        } else if (window.google?.translate?.TranslateElement) {
            window.googleTranslateElementInit();
        }
    }, []);

    return (
        <div id="google_translate_element" className="inline-block" />
    );
}

export default TranslationThing;