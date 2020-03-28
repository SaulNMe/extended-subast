export default function restructureReqQueries(filterObject={}) {
	let filters = { ...filterObject, quotationType: [], status: [], positionType: []};
		if(filters.myOffers) filters.quotationType.push(1);
		delete filters.myOffers;
		if(filters.mySubscriptions) filters.quotationType.push(2);
		delete filters.mySubscriptions;
		if(filters.others) filters.quotationType.push(3);
		delete filters.others;
		if(filters.new) filters.status.push(1);
		delete filters.new;
		if(filters.inProcess) filters.status.push(2);
		delete filters.inProcess;
		if(filters.finished) filters.status.push(3);
		delete filters.finished;
		if(filters.material) filters.positionType.push('M');
		delete filters.material;
		if(filters.services) filters.positionType.push('S');
		delete filters.services;
		if(!filters.getOnlyFavorites) delete filters.getOnlyFavorites;
		
	return filters;
}
