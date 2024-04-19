import { json } from '@sveltejs/kit';

export async function GET({params}) {
	return await new Promise(resolve => setTimeout(() => resolve(
        json({
            name:`hello ${params.sub}`
        }))
    ,1000));
}
