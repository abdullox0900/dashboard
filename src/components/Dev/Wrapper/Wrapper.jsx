import MainSection from '../../Main/Main'
import AddQuestion from '../AddQuestion/AddQuestion'
import QuestionAndAnswers from '../QuestionsAndAnswers/QuestionAndAnswers'

function Wrapper() {
	return (
		<MainSection>
			<AddQuestion />
			<QuestionAndAnswers />
		</MainSection>
	)
}
export default Wrapper
