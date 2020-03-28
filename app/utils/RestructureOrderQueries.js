export default function restructureOrderQueries(filterObject={}) {
	let filters = { ...filterObject, status: [], positionType: []};
		if(filters.incomplete) filters.status.push(0);
		delete filters.incomplete;
		if(filters.complete) filters.status.push(1);
		delete filters.complete;
		if(filters.material) filters.positionType.push('M');
		delete filters.material;
		if(filters.service) filters.positionType.push('S');
		delete filters.service;
	return filters;
}
