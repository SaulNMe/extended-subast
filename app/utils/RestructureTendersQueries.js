export default function restructureReqQueries(filterObject={}) {
	let filters = { ...filterObject, type: [], status: []};
		if(filters.new) filters.status.push(1);
		delete filters.new;
		if(filters.inProcess) filters.status.push(2);
		delete filters.inProcess;
		if(filters.finished) filters.status.push(3);
		delete filters.finished;
		if(filters.tender) filters.type.push(1);
		delete filters.tender;
		if(filters.contract) filters.type.push(2);
		delete filters.contract;
	return filters;
}
