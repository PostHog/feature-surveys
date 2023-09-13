import { createShadow, callSurveys } from './site';

describe('my test suite', () => {
    afterEach(() => {
        // we have to manually reset the DOM after each test
        document.getElementsByTagName('html')[0].innerHTML = ''; 
    })

    test('createShadow', () => {
        const surveyId = 'randomSurveyId'
        const mockShadow = createShadow(`.survey-${surveyId}-form {}`, surveyId)
        expect(mockShadow.mode).toBe('open')
        expect(mockShadow.host.className).toBe(`PostHogSurvey${surveyId}`)
    });

    const mockSurveys = [{ id: 'testSurvey1', name: 'Test survey 1', appearance: null, questions: [{ question: 'How satisfied are you with our newest product?', description: 'This is a question description', type: 'rating', display: 'number', scale: 10, lower_bound_label: 'Not Satisfied', upper_bound_label: 'Very Satisfied' }] }]
    const mockPostHog = {
        getActiveMatchingSurveys: jest.fn().mockImplementation((callback) => callback(mockSurveys)),
        get_session_replay_url: jest.fn(),
        capture: jest.fn().mockImplementation((eventName) => eventName),
    }

    test('does not show survey to user if they have dismissed it before', () => {
        expect(localStorage.getItem(`seenSurvey_${mockSurveys[0].id}`)).toBe(null)
        callSurveys(mockPostHog, false)
        expect(mockPostHog.capture).toBeCalledTimes(1)
        expect(mockPostHog.capture).toBeCalledWith('survey shown', {$survey_id: "testSurvey1", $survey_name: "Test survey 1", sessionRecordingUrl: undefined })

        // now we dismiss the survey
        const cancelButton = document.getElementsByClassName(`PostHogSurvey${mockSurveys[0].id}`)[0].shadowRoot.querySelectorAll('.form-cancel')[0]
        cancelButton.click();
        expect(mockPostHog.capture).toBeCalledTimes(2)
        expect(mockPostHog.capture).toBeCalledWith('survey dismissed',  {$survey_id: "testSurvey1", $survey_name: "Test survey 1", sessionRecordingUrl: undefined })
        expect(localStorage.getItem(`seenSurvey_${mockSurveys[0].id}`)).toBe('true')

        // now we clear the DOM and call surveys again, and it should not show the survey
        document.getElementsByTagName('html')[0].innerHTML = ''; 
        callSurveys(mockPostHog, false)
        expect(document.getElementsByClassName(`PostHogSurvey${mockSurveys[0].id}`)[0]).toBe(undefined)
        // no capture events are called because the survey is not shown
        expect(mockPostHog.capture).toBeCalledTimes(2)
    })
})

test('does not show survey to user if they have already completed it', () => {
})

test('does not show survey to user if they have seen it before and survey wait period is set', () => {
})

test('callSurveys runs in an interval', () => {
})

test('creates open text and link type surveys', () => {
})
