import { Html, Heading, Text } from '@react-email/components'
const EmailTemplate = ({
	username,
	email,
	phone,
	city,
}: {
	username: string
	email?: string
	phone: string
	city: string
}) => {
	return (
		<Html lang='en'>
			<Heading as='h1'>Свяжитесь со мной</Heading>
			<Text>Имя: {username}</Text>
			<Text>Город: {city}</Text>
			{email && <Text>Email: {email}</Text>}
			<Text>Телефон: {phone}</Text>
		</Html>
	)
}
export default EmailTemplate
