import { Button } from '@/components/ui/button'

export default async function Home() {
	return (
		<div className="text-center  h-screen flex items-center justify-center text-9xl min-h-screen">
			<Button variant="outline" className="hover:bg-red-500">
				Hello, World!
			</Button>
		</div>
	)
}
