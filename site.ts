const posthogLogo = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 50 30" fill="none"><path d="M10.8914 17.2057c-.3685.7371-1.42031.7371-1.78884 0L8.2212 15.443c-.14077-.2815-.14077-.6129 0-.8944l.88136-1.7627c.36853-.7371 1.42034-.7371 1.78884 0l.8814 1.7627c.1407.2815.1407.6129 0 .8944l-.8814 1.7627zM10.8914 27.2028c-.3685.737-1.42031.737-1.78884 0L8.2212 25.44c-.14077-.2815-.14077-.6129 0-.8944l.88136-1.7627c.36853-.7371 1.42034-.7371 1.78884 0l.8814 1.7627c.1407.2815.1407.6129 0 .8944l-.8814 1.7628z" fill="##6A6B69"/><path d="M0 23.4082c0-.8909 1.07714-1.3371 1.70711-.7071l4.58338 4.5834c.62997.63.1838 1.7071-.7071 1.7071H.999999c-.552284 0-.999999-.4477-.999999-1v-4.5834zm0-4.8278c0 .2652.105357.5196.292893.7071l9.411217 9.4112c.18753.1875.44189.2929.70709.2929h5.1692c.8909 0 1.3371-1.0771.7071-1.7071L1.70711 12.7041C1.07714 12.0741 0 12.5203 0 13.4112v5.1692zm0-9.99701c0 .26521.105357.51957.292893.7071L19.7011 28.6987c.1875.1875.4419.2929.7071.2929h5.1692c.8909 0 1.3371-1.0771.7071-1.7071L1.70711 2.70711C1.07715 2.07715 0 2.52331 0 3.41421v5.16918zm9.997 0c0 .26521.1054.51957.2929.7071l17.994 17.99401c.63.63 1.7071.1838 1.7071-.7071v-5.1692c0-.2652-.1054-.5196-.2929-.7071l-17.994-17.994c-.63-.62996-1.7071-.18379-1.7071.70711v5.16918zm11.7041-5.87628c-.63-.62997-1.7071-.1838-1.7071.7071v5.16918c0 .26521.1054.51957.2929.7071l7.997 7.99701c.63.63 1.7071.1838 1.7071-.7071v-5.1692c0-.2652-.1054-.5196-.2929-.7071l-7.997-7.99699z" fill="#6A6B69"/><path d="M42.5248 23.5308l-9.4127-9.4127c-.63-.63-1.7071-.1838-1.7071.7071v13.1664c0 .5523.4477 1 1 1h14.5806c.5523 0 1-.4477 1-1v-1.199c0-.5523-.4496-.9934-.9973-1.0647-1.6807-.2188-3.2528-.9864-4.4635-2.1971zm-6.3213 2.2618c-.8829 0-1.5995-.7166-1.5995-1.5996 0-.8829.7166-1.5995 1.5995-1.5995.883 0 1.5996.7166 1.5996 1.5995 0 .883-.7166 1.5996-1.5996 1.5996z" fill="#6A6B69"/><path d="M0 27.9916c0 .5523.447715 1 1 1h4.58339c.8909 0 1.33707-1.0771.70711-1.7071l-4.58339-4.5834C1.07714 22.0711 0 22.5173 0 23.4082v4.5834zM9.997 10.997L1.70711 2.70711C1.07714 2.07714 0 2.52331 0 3.41421v5.16918c0 .26521.105357.51957.292893.7071L9.997 18.9946V10.997zM1.70711 12.7041C1.07714 12.0741 0 12.5203 0 13.4112v5.1692c0 .2652.105357.5196.292893.7071L9.997 28.9916V20.994l-8.28989-8.2899z" fill="#6A6B69"/><path d="M19.994 11.4112c0-.2652-.1053-.5196-.2929-.7071l-7.997-7.99699c-.6299-.62997-1.70709-.1838-1.70709.7071v5.16918c0 .26521.10539.51957.29289.7071l9.7041 9.70411v-7.5834zM9.99701 28.9916h5.58339c.8909 0 1.3371-1.0771.7071-1.7071L9.99701 20.994v7.9976zM9.99701 10.997v7.5834c0 .2652.10539.5196.29289.7071l9.7041 9.7041v-7.5834c0-.2652-.1053-.5196-.2929-.7071L9.99701 10.997z" fill="#6a6b69"/></svg>'

const style = (name, appearance) => `
    .${name}-form, .thanks {
        position: fixed;
        bottom: 3vh;
        right: 20px;
        color: black;
        font-weight: normal;
        font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-align: left;
        z-index: ${parseInt(appearance?.zIndex) || 99999};
    }
    .button {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        text-align: center;
        line-height: 60px;
        font-size: 32px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        filter: brightness(1.2);
    }
    .form-submit[disabled] {
        opacity: 0.6;
        filter: grayscale(100%);
        cursor: not-allowed;
    }
    .thanks {
        background: white;
    }
    .${name}-form {
        flex-direction: column;
        background: ${appearance?.backgroundColor || 'white'};
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        padding-top: 5px;
        box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);
    }
    .${name}-form textarea {
        color: #2d2d2d;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: white;
        color: black;
        outline: none;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        border-radius: 6px;
        margin: 0.5rem;        
    }
    .form-submit {
        box-sizing: border-box;
        margin: 0;
        font-family: inherit;
        overflow: visible;
        text-transform: none;
        line-height: 1.5715;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        user-select: none;
        touch-action: manipulation;
        height: 32px;
        padding: 4px 15px;
        font-size: 14px;
        border-radius: 4px;
        outline: 0;
        background: ${appearance?.submitButtonColor || '#2C2C2C'} !important;
        color: #E5E7E0;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    }
    .form-submit:hover {
        filter: brightness(1.2);
    }
    .form-cancel {
        float: right;
        border: none;
        background: ${appearance?.backgroundColor || 'white'};
        cursor: pointer;
    }
    .thanks {
        display: none;
        font-size: 14px;
        padding: 20px;
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);
        max-width: 340px;
        margin-block-end: 1em;
    }
    .bolded { font-weight: 600; }
    .bottom-section {
        padding-bottom: .5rem;
    }
    .buttons {
        display: flex;
        justify-content: center;
    }
    .footer-branding {
        color: #6a6b69;
        font-size: 10.5px;
        padding-top: .5rem;
        text-align: center;
    }
    .${name}-box {
        padding: .5rem 1rem;
        display: flex;
        flex-direction: column;
    }
    .survey-question {
        padding-top: 4px;
        padding-bottom: 4px;
        text-align: center;
        color: ${appearance?.textColor || 'black'};
    }
    .question-textarea-wrapper {
        display: flex;
        flex-direction: column;
        max-width: ${parseInt(appearance?.maxWidth) || 300};
        padding-bottom: 4px;
    }
`

export function inject({ config, posthog }) {
    if (config.domains) {
        const domains = config.domains.split(',').map((domain) => domain.trim())
        if (domains.length > 0 && domains.indexOf(window.location.hostname) === -1) {
            return
        }
    }

    const getSessionRecordingUrl = () => {
        const sessionId = posthog?.sessionRecording?.sessionId
        const LOOK_BACK = 30
        const recordingStartTime = Math.max(
            Math.floor((new Date().getTime() - (posthog?.sessionManager?._sessionStartTimestamp || 0)) / 1000) -
            LOOK_BACK,
            0
        )
        const api_host = posthog?.config?.api_host || 'https://app.posthog.com'
        return sessionId ? `${api_host}/recordings/${sessionId}?t=${recordingStartTime}` : undefined
    }

    const createShadow = (styleSheet: string) => {
        const div = document.createElement('div')
        const shadow = div.attachShadow({ mode: 'open' })
        if (styleSheet) {
            const styleElement = Object.assign(document.createElement('style'), {
                innerText: styleSheet,
            })
            shadow.appendChild(styleElement)
        }
        document.body.appendChild(div)
        return shadow
    }

    const createSurveyPopup = (survey, surveyName) => {
        const form = `
        <div class="${surveyName}-box">
            <div class="cancel-btn-wrapper">
            <button class="form-cancel" type="cancel">X</button>
            </div>
            <div class="question-textarea-wrapper">
            <div class="survey-question"></div>
            <textarea class="survey-textarea" name="survey" rows=4></textarea>
            </div>
            <div class="bottom-section">
                <div class="buttons">
                    <button class="form-submit" type="submit" disabled>Submit</button>
                </div>
                <div class="footer-branding"></div>
            </div>
        </div>
    `

        const formElement = Object.assign(document.createElement('form'), {
            className: `${surveyName}-form`,
            innerHTML: form,
            onsubmit: function (e) {
                e.preventDefault()
                const sessionRecordingUrl = getSessionRecordingUrl()
                posthog.capture(`${survey.name} survey sent`, {
                    $survey_name: survey.name,
                    $survey_id: survey.id,
                    $survey_question: survey.question,
                    $survey_response: e.target.survey.value,
                    sessionRecordingUrl: sessionRecordingUrl,
                })
                closeSurveyPopup(surveyName, survey.id, formElement)
            }
        })
        adjustSurveyAppearance(survey, formElement)

        return formElement
    }

    const closeSurveyPopup = (surveyName: string, surveyId: string, surveyPopup: HTMLFormElement) => {
        Object.assign(surveyPopup.style, { display: 'none' })
        localStorage.setItem(`seenSurvey_${surveyName}_${surveyId}`, "true")
        window.setTimeout(() => {
            window.dispatchEvent(new Event('PHSurveyClosed'))
        }, 2000)
        surveyPopup.reset()
    }

    const adjustSurveyAppearance = (survey, formElement) => {
        const cancelButton = formElement.getElementsByClassName('form-cancel')[0] as HTMLButtonElement
        const submitButton = formElement.getElementsByClassName('form-submit')[0] as HTMLButtonElement
        const footerArea = formElement.getElementsByClassName('footer-branding')[0] as HTMLElement
        const surveyQuestion = formElement.getElementsByClassName('survey-question')[0] as HTMLElement
    
        Object.assign(submitButton.style, {
            color: survey.appearance?.buttonColor || "#E5E7E0",
            background: survey.appearance?.buttonBackground || "#2C2C2C",
        })

        cancelButton.innerText = survey.appearance?.cancelButtonText || 'X'
        submitButton.innerText = survey.appearance?.sendButtonText || 'Finish'
        surveyQuestion.innerText = survey.questions[0].question || ''

        footerArea.innerHTML = `<div>powered by ${posthogLogo} PostHog</div>`
    }

    const addListeners = (surveyPopup, surveyName, surveyId, surveyEventName) => {
        const cancelButton = surveyPopup.getElementsByClassName('form-cancel')[0] as HTMLButtonElement
        const textarea = surveyPopup.getElementsByClassName('survey-textarea')[0] as HTMLTextAreaElement
        const submitButton = surveyPopup.getElementsByClassName('form-submit')[0] as HTMLButtonElement

        cancelButton.addEventListener('click', (e) => {
            e.preventDefault()
            Object.assign(surveyPopup.style, { display: 'none' })
            localStorage.setItem(`seenSurvey_${surveyName}_${surveyId}`, "true")
            const sessionRecordingUrl = getSessionRecordingUrl()
            posthog.capture(`${surveyEventName} survey dismissed`, {
                $survey_name: surveyEventName,
                $survey_id: surveyId,
                sessionRecordingUrl: sessionRecordingUrl,
            })
            window.dispatchEvent(new Event('PHSurveyClosed'))
        })

        textarea.addEventListener('input', (e) => {
            if (textarea.value.length > 0) {
                submitButton.disabled = false
            } else {
                submitButton.disabled = true
            }
        })
    }

    posthog?.getActiveMatchingSurveys((surveys) => {
        surveys.forEach((survey) => {
            const surveyName = survey.name.replace(/\s/g , "-")
            if (!localStorage.getItem(`seenSurvey_${surveyName}_${survey.id}`)) {
                const shadow = createShadow(style(surveyName, survey?.appearance))
                const surveyPopup = createSurveyPopup(survey, surveyName)
                addListeners(surveyPopup, surveyName, survey.id, survey.name)
                shadow.appendChild(surveyPopup)
                window.dispatchEvent(new Event('PHSurveyShown'))
                const sessionRecordingUrl = getSessionRecordingUrl()
                posthog.capture(`${survey.name} survey shown`, {
                    $survey_name: survey.name,
                    $survey_id: survey.id,
                    sessionRecordingUrl: sessionRecordingUrl,
                })
            }
        })
    }, true)
}
