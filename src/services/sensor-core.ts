/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import {
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios,
} from './serviceOptions';
export const basePath = '/api/core';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class ChirpStackDeviceService {
  /**
   * 刷新设备的DownLinkQueue
   */
  static flushDownLinkDeviceQueue(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url =
        basePath + '/chirpStack/device/FlushDownLinkDeviceQueue/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取到设备的DownLinkQueue队列信息
   */
  static getDownLinkDeviceQueue(
    params: {
      /** 为true,表示只返回队列中的元素数量，不返回具体的队列元素数据 */
      countOnly?: boolean;
      /** 设备的物联ID，不能为空 */
      devEui?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GetDownLinkDeviceQueueResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/GetDownLinkDeviceQueue';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        countOnly: params['countOnly'],
        devEui: params['devEui'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 往ChirpStack上新增一个设备
   */
  static createChirpStackDevice(
    params: {
      /** inputDto */
      inputDto: CreateChirpStackDeviceInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/createChirpStackDevice';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['inputDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 创建设备的OTAAKeys信息
   */
  static createDeviceOtaaKey(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateAndUpdateDeviceOtaaKeyInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/createDeviceOTAAKey';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 将指定项信息加入到队列downlinkQueue
   */
  static createDeviceQueueItem(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateDeviceQueueItemInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/createDeviceQueueItem';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备的OTAAKeys信息
   */
  static deleteDeviceOtaaKey(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/deleteDeviceOTAAKey/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据设备EUI，从ChirpStack上获取到对应的设备信息
   */
  static getChirpStackDeviceInfo(
    params: {
      /** deviceEui */
      deviceEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ChirpStackDeviceInfoDto> {
    return new Promise((resolve, reject) => {
      let url =
        basePath + '/chirpStack/device/getChirpStackDeviceInfo/{deviceEui}';
      url = url.replace('{deviceEui}', params['deviceEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取到设备的链路指标数据，包括：上行链路、下行链路、RSSI和SNR等
   */
  static getDeviceLinkMetrics(
    params: {
      /** 聚合的维度 */
      aggregation?: string;
      /** 设备的物联ID */
      devEui?: string;
      /** 结束时间 */
      endTime?: string;
      /** 开始时间 */
      startTime?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceLinkMetricsResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/getDeviceLinkMetrics';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        aggregation: params['aggregation'],
        devEui: params['devEui'],
        endTime: params['endTime'],
        startTime: params['startTime'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取到设备的遥测数据
   */
  static getDeviceMetrics(
    params: {
      /** 聚合的维度 */
      aggregation?: string;
      /** 设备的物联ID */
      devEui?: string;
      /** 结束时间 */
      endTime?: string;
      /** 开始时间 */
      startTime?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceMetricResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/getDeviceMetrics';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        aggregation: params['aggregation'],
        devEui: params['devEui'],
        endTime: params['endTime'],
        startTime: params['startTime'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据设备的devEUI获取到设备的OTAAKeys信息
   */
  static getOtaaKeysByDevEui(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GetOtaaKeyInfoDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/getOTAAKeysByDevEui/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 往ChirpStack上删除一个设备
   */
  static removeChirpStackDevice(
    params: {
      /** devEUI */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/removeChirpStackDevice/{devEUI}';
      url = url.replace('{devEUI}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 往ChirpStack上更新一个设备
   */
  static updateChirpStackDevice(
    params: {
      /** inputDto */
      inputDto: UpdateChirpStackDeviceInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/updateChirpStackDevice';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['inputDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新设备的OTAAKeys信息
   */
  static updateDeviceOtaaKey(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateAndUpdateDeviceOtaaKeyInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/device/updateDeviceOTAAKey';

      const configs: IRequestConfig = getConfigs(
        'put',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ChirpStackDeviceProfileService {
  /**
   * 从chirpStack上获取到设备类型的profile配置的详细信息
   */
  static getDeviceProfileDetailByProfileId(
    params: {
      /** profileId */
      profileId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceProfileDetailDto> {
    return new Promise((resolve, reject) => {
      let url =
        basePath +
        '/chirpStack/deviceProfile/getDeviceProfileDetailByProfileId/{profileId}';
      url = url.replace('{profileId}', params['profileId'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 从ChirpStack获取到设备类型配置信息
   */
  static getDeviceProfileList(
    params: {
      /** 设备配置文件的名称，不传，则查询所有的文件 */
      search?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceProfileDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/chirpStack/deviceProfile/getDeviceProfileList';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { search: params['search'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
}

export class DeviceService {
  /**
   * 删除设备的DownLinkQueue
   */
  static flushDownLinkDeviceQueue(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/FlushDownLinkDeviceQueue/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取到设备的DownLinkQueue队列信息
   */
  static getDownLinkDeviceQueue(
    params: {
      /** 为true,表示只返回队列中的元素数量，不返回具体的队列元素数据 */
      countOnly?: boolean;
      /** 设备的物联ID，不能为空 */
      devEui?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GetDownLinkDeviceQueueResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/GetDownLinkDeviceQueue';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        countOnly: params['countOnly'],
        devEui: params['devEui'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 创建设备的OTAAKeys信息
   */
  static createDeviceOtaaKey(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateAndUpdateDeviceOtaaKeyInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/createDeviceOTAAKey';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 将指定项信息加入到队列downlinkQueue
   */
  static createDeviceQueueItem(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateDeviceQueueItemInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/createDeviceQueueItem';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备，同时删除物联设备
   */
  static deleteById(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/deleteById/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备的同时，删除设备和区域的绑定关系，同时删除物联设备
   */
  static deleteDevice(
    params: {
      /** 设备id */
      deviceId?: string;
      /** 区域节点 */
      nodeId?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/deleteDevice';

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );
      configs.params = {
        deviceId: params['deviceId'],
        nodeId: params['nodeId'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备的OTAAKeys信息
   */
  static deleteDeviceOtaaKey(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/deleteDeviceOTAAKey/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备，只删除逻辑设备
   */
  static deleteLogicDeviceById(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/deleteLogicDeviceById/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询设备详情,包含了物联信息
   */
  static getDetailById(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceDetailDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/getDetailById/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 从物联设备处，获取到设备的链路指标数据，包括：上行链路、下行链路、RSSI和SNR等
   */
  static getDeviceLinkMetrics(
    params: {
      /** 聚合的维度 */
      aggregation?: string;
      /** 设备的物联ID */
      devEui?: string;
      /** 结束时间 */
      endTime?: string;
      /** 开始时间 */
      startTime?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceLinkMetricsResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/getDeviceLinkMetrics';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        aggregation: params['aggregation'],
        devEui: params['devEui'],
        endTime: params['endTime'],
        startTime: params['startTime'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 从物联设备处，获取到设备的遥测数据
   */
  static getDeviceMetrics(
    params: {
      /** 聚合的维度 */
      aggregation?: string;
      /** 设备的物联ID */
      devEui?: string;
      /** 结束时间 */
      endTime?: string;
      /** 开始时间 */
      startTime?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceMetricResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/getDeviceMetrics';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        aggregation: params['aggregation'],
        devEui: params['devEui'],
        endTime: params['endTime'],
        startTime: params['startTime'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据设备的devEUI获取到设备的OTAAKeys信息
   */
  static getOtaaKeysByDevEui(
    params: {
      /** devEui */
      devEui: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GetOtaaKeyInfoDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/getOTAAKeysByDevEui/{devEui}';
      url = url.replace('{devEui}', params['devEui'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询所有设备列表
   */
  static listAll(
    params: {
      /** 设备名 */
      name?: string;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<DeviceListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/listAll';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        unPage: params['unPage'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 保存设备，同时新增或者更新物联设备信息
   */
  static saveDevice(
    params: {
      /** inputDto */
      inputDto: DeviceDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/saveDevice';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['inputDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新设备的OTAAKeys信息
   */
  static updateDeviceOtaaKey(
    params: {
      /** devEui */
      devEui?: string;
      /** input */
      input: CreateAndUpdateDeviceOtaaKeyInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/device/updateDeviceOTAAKey';

      const configs: IRequestConfig = getConfigs(
        'put',
        'application/json',
        url,
        options,
      );
      configs.params = { devEui: params['devEui'] };

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DeviceAreaService {
  /**
   * 在某个区域下批量绑定设备
   */
  static batchBind(
    params: {
      /** input */
      input: BatchBindDeviceAreaInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/batchBind';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据选择的设备IDS,批量解绑
   */
  static batchUnBind(
    params: {
      /** deviceIds */
      deviceIds: any | null[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/batchUnbind';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['deviceIds'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据选择的区域下的某些设备,对其进行批量解绑
   */
  static batchUnbindByAreaAndDevice(
    params: {
      /** input */
      input: BatchUnbindByAreaAndDeviceInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/batchUnbindByAreaAndDevice';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 新增设备区域
   */
  static createDeviceArea(
    params: {
      /** input */
      input: DeviceAreaInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceAreaDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/createDeviceArea';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除设备区域(嵌套删除)
   */
  static deleteDeviceArea(
    params: {
      /** areaId */
      areaId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/deleteDeviceArea/{areaId}';
      url = url.replace('{areaId}', params['areaId'] + '');

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取所有设备区域
   */
  static getAllDeviceArea(
    options: IRequestOptions = {},
  ): Promise<ListResultDto<DeviceAreaDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/getAllDeviceArea';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取到该区域下的设备列表信息
   */
  static getDeviceListByArea(
    params: {
      /** 区域ID */
      areaId?: string;
      /** 设备名 */
      deviceName?: string;
      /** 是否包含所有子区域 */
      isIncludeAllSubAreas?: boolean;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<DeviceListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/getDeviceListByArea';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        areaId: params['areaId'],
        deviceName: params['deviceName'],
        isIncludeAllSubAreas: params['isIncludeAllSubAreas'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        unPage: params['unPage'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 移动设备区域
   */
  static moveDeviceArea(
    params: {
      /** input */
      input: MoveDeviceAreaInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceAreaDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/moveDeviceArea';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 在某个区域下，更新某个设备的排序
   */
  static updateAreasDeviceSort(
    params: {
      /** input */
      input: UpdateAreasDeviceSortDto[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/updateAreasDeviceSort';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新设备区域
   */
  static updateDeviceArea(
    params: {
      /** input */
      input: UpdateDeviceAreaInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceAreaDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceArea/updateDeviceArea';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['input'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DeviceMetricDataService {
  /**
   * 获取到设备的历史遥测数据
   */
  static getDeviceMetricData(
    params: {
      /** 设备ID */
      deviceId?: string;
      /** 结束时间 */
      endTime?: Date;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 开始时间 */
      startTime?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DeviceMetricAggregationDataDetailDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/deviceMetricData/get-device-metric-data';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        deviceId: params['deviceId'],
        endTime: params['endTime'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startTime: params['startTime'],
        unPage: params['unPage'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据设备物联ID相关条件，获取到设备遥测的历史数据
   */
  static getDeviceMetricListDataByDeviceEui(
    params: {
      /** 设备的物联ID */
      devEui?: string;
      /** 设备物联属性key */
      deviceFieldName?: string;
      /** 结束时间 */
      endTime?: Date;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 开始时间 */
      startTime?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<DeviceMetricListDataDto>> {
    return new Promise((resolve, reject) => {
      let url =
        basePath + '/deviceMetricData/getDeviceMetricListDataByDeviceEui';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        devEui: params['devEui'],
        deviceFieldName: params['deviceFieldName'],
        endTime: params['endTime'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startTime: params['startTime'],
        unPage: params['unPage'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 根据设备ID相关条件，获取到设备遥测的历史数据
   */
  static getDeviceMetricListDataByDeviceId(
    params: {
      /** 设备的属性名称 */
      deviceFieldName?: string;
      /** 设备ID */
      deviceId?: string;
      /** 结束时间 */
      endTime?: Date;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 开始时间 */
      startTime?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<DeviceMetricListDataDto>> {
    return new Promise((resolve, reject) => {
      let url =
        basePath + '/deviceMetricData/getDeviceMetricListDataByDeviceId';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        deviceFieldName: params['deviceFieldName'],
        deviceId: params['deviceId'],
        endTime: params['endTime'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startTime: params['startTime'],
        unPage: params['unPage'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
}

export class StorehouseEnumService {
  /**
   * 获取枚举定义
   */
  static getEnums(options: IRequestOptions = {}): Promise<EnumOutputDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/storehouseEnum/getEnums';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
}

export interface BatchBindDeviceAreaInputDto {
  /** 设备区域ID */
  areaId?: string;

  /** 待绑定的设备ID */
  deviceIdList?: number[];
}

export interface BatchUnbindByAreaAndDeviceInputDto {
  /** 设备区域ID */
  areaId?: string;

  /** 待解绑的设备IDs */
  deviceIdList?: number[];
}

export interface ChirpStackDeviceInfoDto {
  /**  */
  classEnabled?: string;

  /** 设备的创建时间 */
  createdAt?: Date;

  /** ChirpStack上的设备基础信息 */
  device?: ChirpStackDeviceResponseDataDto;

  /** 设备某些状态属性信息 */
  deviceStatus?: ChirpStackDeviceStatusDto;

  /** 设备最新的活动时间 */
  lastSeenAt?: Date;

  /** 设备信息最近的更新时间 */
  updatedAt?: Date;
}

export interface ChirpStackDeviceResponseDataDto {
  /** 设备所属应用ID */
  applicationId?: string;

  /**  */
  description?: string;

  /** 设备物联ID */
  devEui?: string;

  /** 设备模板ID */
  deviceProfileId?: string;

  /**  */
  disabled?: boolean;

  /**  */
  joinEui?: string;

  /** 设备名称 */
  name?: string;

  /**  */
  skipFcntCheck?: boolean;

  /**  */
  tags?: object;

  /**  */
  variables?: object;
}

export interface ChirpStackDeviceStatusDto {
  /**  */
  batteryLevel?: number;

  /**  */
  externalPowerSource?: boolean;

  /**  */
  margin?: number;
}

export interface CreateAndUpdateDeviceOtaaKeyInputDto {
  /** 创建或者更新设备的OTAAKey信息时，所需的信息 */
  deviceKeys?: DeviceKeysInfoDto;
}

export interface CreateChirpStackDeviceInputDto {
  /** 设备的相关信息 */
  device?: CreateChirpStackDeviceItemInfoInputDto;
}

export interface CreateChirpStackDeviceItemInfoInputDto {
  /** 设备所属应用ID */
  applicationId?: string;

  /** 设备描述 */
  description?: string;

  /** 设备物联ID,长度必须是16位 */
  devEui?: string;

  /** 设备的模板ID */
  deviceProfileId?: string;

  /** 设备是否禁用，默认：否，不禁用 */
  isDisabled?: boolean;

  /**  */
  joinEui?: string;

  /** 设备名称 */
  name?: string;

  /** 设备使用禁用帧验证，默认：否，不禁用 */
  skipFcntCheck?: boolean;
}

export interface CreateDeviceQueueItemDataDto {
  /**  */
  confirmed?: boolean;

  /**  */
  data?: string;

  /**  */
  fcntDown?: string;

  /**  */
  fport?: string;

  /**  */
  id?: string;

  /** 当这个值为true时，fCntDown的值才能保存 */
  isEncrypted?: boolean;

  /**  */
  isPending?: boolean;

  /**  */
  object?: object;
}

export interface CreateDeviceQueueItemInputDto {
  /**  */
  queueItem?: CreateDeviceQueueItemDataDto;
}

export interface DeviceAreaDto {
  /** 区域名称 */
  areaName?: string;

  /** id */
  id?: string;

  /** 组织id */
  orgId?: string;

  /** 父设备区域id */
  parentId?: string;

  /**  */
  room?: boolean;

  /** 序号 */
  sortIndex?: number;
}

export interface DeviceAreaInputDto {
  /** 区域名称 */
  areaName?: string;

  /** 父级区域id */
  parentId?: string;

  /**  */
  room?: boolean;

  /** 顺序 */
  sortIndex?: number;
}

export interface DeviceDetailDto {
  /** ChirpStack上的设备信息 */
  chirpStackDeviceInfo?: ChirpStackDeviceInfoDto;

  /** 设备描述 */
  description?: string;

  /** 设备物联ID */
  devEui?: string;

  /** 设备的相关属性 */
  deviceFieldList?: DeviceFieldDto[];

  /** 设备的模板ID */
  deviceProfileId?: string;

  /** 设备的模板文件名称 */
  deviceProfileName?: string;

  /** id */
  id?: string;

  /** 设备是否禁用,默认是false，表示不禁用 */
  isDisabled?: boolean;

  /** 设备最新的遥测数据 */
  latestMetricDataList?: DeviceLatestMetricDataDto[];

  /** 设备名称 */
  name?: string;

  /** 设备是否在线，true表示在线 , 默认是false */
  online?: boolean;

  /** 禁用设备的帧计数器验证 是否开启 ，默认为false,表示不开启禁用 */
  skipFcntCheck?: boolean;
}

export interface DeviceDto {
  /** 设备描述 */
  description?: string;

  /** 设备物联ID */
  devEui?: string;

  /** 设备的相关属性 */
  deviceFieldList?: DeviceFieldDto[];

  /** 设备的模板ID */
  deviceProfileId?: string;

  /** 设备的模板文件名称 */
  deviceProfileName?: string;

  /** id */
  id?: string;

  /** 设备是否禁用,默认是false，表示不禁用 */
  isDisabled?: boolean;

  /** 设备名称 */
  name?: string;

  /** 设备是否在线，true表示在线 , 默认是false */
  online?: boolean;

  /** 禁用设备的帧计数器验证 是否开启 ，默认为false,表示不开启禁用 */
  skipFcntCheck?: boolean;
}

export interface DeviceFieldDto {
  /** 设备属性的描述 */
  description?: string;

  /** 所属设备的物联ID */
  devEui?: string;

  /** 设备属性名 */
  fieldName?: string;

  /** 设备属性对应的类型 */
  fieldType?: EnumDeviceFieldDtoFieldType;

  /** id */
  id?: string;
}

export interface DeviceKeysInfoDto {
  /**  */
  appKey?: string;

  /**  */
  nwkKey?: string;
}

export interface DeviceLatestMetricDataDto {
  /** 设备属性的描述 */
  description?: string;

  /** 设备的物联ID */
  devEui?: string;

  /** 设备遥测属性名称 */
  deviceFieldName?: string;

  /** 设备遥测值上报的最新时间 */
  time?: Date;

  /** 设备最新的遥测数据值 */
  value?: number;
}

export interface DeviceLinkMetricRxPacketsPerDrDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceLinkMetricsErrorsDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceLinkMetricsGwRssiDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceLinkMetricsGwSnrDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceLinkMetricsResponseDto {
  /**  */
  errors?: DeviceLinkMetricsErrorsDto;

  /**  */
  gwRssi?: DeviceLinkMetricsGwRssiDto;

  /**  */
  gwSnr?: DeviceLinkMetricsGwSnrDto;

  /**  */
  rxPackets?: DeviceLinkMetricsRxPacketsDto;

  /**  */
  rxPacketsPerDr?: DeviceLinkMetricRxPacketsPerDrDto;

  /**  */
  rxPacketsPerFreq?: DeviceLinkMetricsRxPacketsPerFreqDto;
}

export interface DeviceLinkMetricsRxPacketsDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceLinkMetricsRxPacketsPerFreqDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceListDto {
  /** 设备所属的区域ID */
  areaId?: string;

  /** 设备描述 */
  description?: string;

  /** 设备的物联ID */
  devEui?: string;

  /** 设备的模板ID */
  deviceProfileId?: string;

  /** 设备的模板文件名称 */
  deviceProfileName?: string;

  /** id */
  id?: string;

  /** 设备排序标识 */
  index?: number;

  /** 设备最新的遥测数据 */
  latestMetricDataList?: DeviceLatestMetricDataDto[];

  /** 设备名称 */
  name?: string;

  /** 设备是否在线，true表示在线 */
  online?: boolean;
}

export interface DeviceMetricAggregationDataDetailDto {
  /** 设备属性的历史遥测的聚合数据,key是对应的设备属性名 */
  metrics?: object;

  /** 设备各个属性的历史遥测数据的总数量 */
  totalCount?: number;
}

export interface DeviceMetricDataSetDto {
  /** 设备属性对应的遥测数据集 */
  data?: number[];

  /** 设备属性名 */
  label?: string;
}

export interface DeviceMetricListDataDto {
  /** 设备属性的描述 */
  description?: string;

  /** 设备物联ID */
  devEui?: string;

  /** 设备物联属性key */
  deviceFieldName?: string;

  /** id */
  id?: string;

  /** 数据上报时间 */
  upTime?: Date;

  /** 浮点格式属性值 */
  value?: number;
}

export interface DeviceMetricPropertyDataDto {
  /**  */
  datasets?: DeviceMetricPropertyDataItemDto[];

  /**  */
  kind?: string;

  /**  */
  name?: string;

  /**  */
  timestamps?: string[];
}

export interface DeviceMetricPropertyDataItemDto {
  /**  */
  data?: number[];

  /**  */
  label?: string;
}

export interface DeviceMetricResponseDto {
  /** 遥测的相关遥测数据 */
  metrics?: object;

  /** 遥测的相关额外信息 */
  states?: object;
}

export interface DeviceMetricsAggregationDataDto {
  /** 设备属性的历史遥测数据值 */
  datasets?: DeviceMetricDataSetDto[];

  /** 设备属性名的中文描述 */
  name?: string;

  /** 设备属性的历史遥测数据的上报时间 */
  timestamps?: LocalDateTime[];
}

export interface DeviceOtaaKeyInfoDto {
  /**  */
  appKey?: string;

  /**  */
  devEui?: string;

  /**  */
  nwkKey?: string;
}

export interface DeviceProfileDetailDataDto {
  /**  */
  abpRx1Delay?: number;

  /**  */
  abpRx1DrOffset?: string;

  /**  */
  abpRx2Dr?: string;

  /**  */
  abpRx2Freq?: string;

  /**  */
  adrAlgorithmId?: string;

  /**  */
  autoDetectMeasurements?: boolean;

  /**  */
  classBPingSlotDr?: number;

  /**  */
  classBPingSlotFreq?: number;

  /**  */
  classBPingSlotNbK?: number;

  /**  */
  classBTimeout?: number;

  /**  */
  classCTimeout?: number;

  /** profile的描述 */
  description?: string;

  /**  */
  deviceStatusReqInterval?: number;

  /**  */
  flushQueueOnActivate?: boolean;

  /** profile的ID */
  id?: string;

  /**  */
  macVersion?: string;

  /**  */
  measurements?: object;

  /** profile的名称 */
  name?: string;

  /**  */
  payloadCodecRuntime?: string;

  /**  */
  payloadCodecScript?: string;

  /**  */
  regParamsRevision?: string;

  /**  */
  region?: string;

  /**  */
  regionConfigId?: string;

  /**  */
  relay?: boolean;

  /**  */
  relayCadPeriodicity?: string;

  /**  */
  relayDefaultChannelIndex?: number;

  /**  */
  relayEd?: boolean;

  /**  */
  relayEdActivationMode?: string;

  /**  */
  relayEdBackOff?: number;

  /**  */
  relayEdRelayOnly?: boolean;

  /**  */
  relayEdSmartEnableLevel?: number;

  /**  */
  relayEdUplinkLimitBucketSize?: number;

  /**  */
  relayEdUplinkLimitReloadRate?: number;

  /**  */
  relayEnabled?: boolean;

  /**  */
  relayGlobalUplinkLimitBucketSize?: number;

  /**  */
  relayGlobalUplinkLimitReloadRate?: number;

  /**  */
  relayJoinReqLimitBucketSize?: number;

  /**  */
  relayJoinReqLimitReloadRate?: number;

  /**  */
  relayNotifyLimitBucketSize?: number;

  /**  */
  relayNotifyLimitReloadRate?: number;

  /**  */
  relayOverallLimitBucketSize?: number;

  /**  */
  relayOverallLimitReloadRate?: number;

  /**  */
  relaySecondChannelAckOffset?: string;

  /**  */
  relaySecondChannelDr?: number;

  /**  */
  relaySecondChannelFreq?: number;

  /**  */
  supportsClassB?: boolean;

  /**  */
  supportsClassC?: boolean;

  /**  */
  supportsOtaa?: boolean;

  /**  */
  tags?: object;

  /** 所属的租户信息 */
  tenantId?: string;

  /**  */
  uplinkInterval?: number;
}

export interface DeviceProfileDetailDto {
  /** profile的创建时间 */
  createdAt?: Date;

  /** 设备的profile信息 */
  deviceProfile?: DeviceProfileDetailDataDto;

  /** profile的更新时间 */
  updatedAt?: Date;
}

export interface DeviceProfileDto {
  /** 模版的创建时间 */
  createdAt?: string;

  /** 设备模版ID */
  id?: string;

  /**  */
  macVersion?: string;

  /** 模版的名称，对应与本系统中的设备类型 */
  name?: string;

  /**  */
  regParamsRevision?: string;

  /**  */
  region?: string;

  /**  */
  supportsClassB?: string;

  /**  */
  supportsClassC?: string;

  /**  */
  supportsOtaa?: string;

  /** 模版的更新时间 */
  updatedAt?: string;
}

export interface DeviceProfileMeasurementsDto {
  /**  */
  kind?: string;

  /**  */
  name?: string;
}

export interface DeviceStatesPropertyDataDto {
  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface DownLinkDeviceQueueDataDto {
  /**  */
  confirmed?: boolean;

  /**  */
  data?: string;

  /**  */
  devEui?: string;

  /**  */
  fcntDown?: string;

  /**  */
  fport?: string;

  /**  */
  id?: string;

  /**  */
  isEncrypted?: boolean;

  /**  */
  object?: object;

  /**  */
  pending?: boolean;
}

export interface EnumOutputDto {
  /** 通讯设备类型枚举 */
  deviceType?: SelectListOutputDto[];
}

export interface GetDownLinkDeviceQueueResponseDto {
  /**  */
  result?: DownLinkDeviceQueueDataDto[];

  /**  */
  totalCount?: number;
}

export interface GetOtaaKeyInfoDto {
  /**  */
  createdAtTime?: Date;

  /**  */
  deviceKeys?: DeviceOtaaKeyInfoDto;

  /**  */
  updatedAtTime?: Date;
}

export interface MoveDeviceAreaInputDto {
  /** id */
  id?: string;

  /** 新父组织机构id */
  newParentId?: string;
}

export interface SelectListOutputDto {
  /** 显示名称 */
  displayName?: string;

  /**  */
  name?: string;

  /** 是否被勾选 */
  selected?: boolean;

  /**  */
  value?: number;
}

export interface UpdateAreasDeviceSortDto {
  /** 设备ID */
  deviceId?: string;

  /** 排序值 */
  index?: number;
}

export interface UpdateChirpStackDeviceInfoItemInputDto {
  /** 设备所属应用ID,后端传值 */
  applicationId?: string;

  /** 设备描述 */
  description?: string;

  /** 设备物联ID,长度必须是16位 */
  devEui?: string;

  /** 设备的模板ID */
  deviceProfileId?: string;

  /** 是否启用，默认：是 */
  isDisabled?: boolean;

  /**  */
  joinEui?: string;

  /** 设备名称 */
  name?: string;

  /**  */
  skipFcntCheck?: boolean;
}

export interface UpdateChirpStackDeviceInputDto {
  /** 需要更新的设备信息 */
  device?: UpdateChirpStackDeviceInfoItemInputDto;
}

export interface UpdateDeviceAreaInputDto {
  /** 区域名称 */
  areaName?: string;

  /** id */
  id?: string;

  /** 父设备区域id */
  parentId?: string;

  /**  */
  room?: boolean;

  /** 顺序 */
  sortIndex?: number;
}
export enum EnumDeviceFieldDtoFieldType {
  'DOUBLE' = 'DOUBLE',
  'STRING' = 'STRING',
  'BOOLEAN' = 'BOOLEAN',
  'LONG' = 'LONG',
}
