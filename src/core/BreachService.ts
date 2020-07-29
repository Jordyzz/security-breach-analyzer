import { httpService } from './HttpService/HttpService';
import { dispatch, getState } from '@redux/store';
import { loadBreaches } from '@redux/breaches';
import { BreachesResponse } from './HttpService/http.interface';

class BreachService {
  getBreaches() {
    const { offset } = getState().breaches;
    httpService
      .api<BreachesResponse>({ type: 'getBreaches', urlParams: { offset: offset } })
      .then(res => {
        dispatch(
          loadBreaches({
            items: this.serverToLocal(res),
            offset: offset + 10,
            hasNext: offset + 10 <= res.total
          })
        );
      });
  }

  serverToLocal(res: BreachesResponse) {
    return res.items.map(i => ({
      name: i.Name,
      title: i.Title,
      description: i.Description,
      logo: i.LogoPath,
      tags: i.DataClasses,
      breachDate: i.BreachDate
    }));
  }
}

export const breachService = new BreachService();
