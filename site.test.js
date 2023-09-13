import { createShadow, callSurveys, createRatingsPopup } from './site';

describe('my test suite', () => {
    afterEach(() => {
        // we have to manually reset the DOM after each test
        document.querySelector("div[class^='PostHogSurvey']").innerHTML = ''
    })

    test('createShadow', () => {
        const surveyId = 'randomSurveyId'
        const mockShadow = createShadow(`.survey-${surveyId}-form {}`, surveyId)
        expect(mockShadow.mode).toBe('open')
        expect(mockShadow.host.className).toBe(`PostHogSurvey${surveyId}`)
    });

    test('does not show survey to user if they have dismissed it before', () => {
        const mockSurveys = [{ id: 'testSurvey1', name: 'Test survey 1', appearance: null, questions: [{ question: 'How satisfied are you with our newest product?', description: 'This is a question description', type: 'rating', display: 'number', scale: 10, lower_bound_label: 'Not Satisfied', upper_bound_label: 'Very Satisfied' }] }]
        const mockPostHog = {
            getActiveMatchingSurveys: jest.fn().mockImplementation((callback) => callback(mockSurveys)),
        }
        const createRatingsPopup = jest.fn()
        expect(localStorage.getItem(`seenSurvey_${mockSurveys[0].id}`)).toBe(null)
        callSurveys(mockPostHog, false)
        // expect(createRatingsPopup).toBeCalledTimes(1)    
        // localStorage.setItem(`seenSurvey_${mockSurveys[0].id}`, true)
        // callSurveys(mockPostHog, false)
        // expect(createRatingsPopup).toBeCalledTimes(0)
    })
})

// jest.mock('./site', () => ({
//     createShadow: jest.fn(),
//     callSurveys: jest.fn(),
//     createRatingsPopup: jest.fn()
// }))



test('does not show survey to user if they have already completed it', () => {
})

test('does not show survey to user if they have seen it before and survey wait period is set', () => {
})

test('callSurveys runs in an interval', () => {
})

test('creates open text and link type surveys', () => {
})
