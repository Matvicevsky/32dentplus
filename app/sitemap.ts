import { EMPLOYEES } from '@/constants/ru/staff/employees'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const generateEmployeesSitemapObjects = async () => {
		return EMPLOYEES.map(item => ({
			slug: item.id,
			updatedAt: new Date(),
		}))
	}
	return [
		{
			url: 'http://32dent.by',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'http://32dent.by/doctors',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		...(await generateEmployeesSitemapObjects()).map(o => ({
			url: `http://32dent.by/doctors/${o.slug}`,
			lastModified: o.updatedAt,
		})),
	]
}
