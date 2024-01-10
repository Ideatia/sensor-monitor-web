/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import {
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios,
} from './serviceOptions';
export const basePath = '/api/auth';

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

export class SettingsService {
  /**
   * 获取所有配置用于初始化
   */
  static getAllSettingsForInit(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/getAllSettingsForInit';

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
   * 获取应用的配置信息
   */
  static getApplicationSettings(
    options: IRequestOptions = {},
  ): Promise<SettingDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/getApplicationSettings';

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
   * 获取厂站的配置信息
   */
  static getStationSettings(
    options: IRequestOptions = {},
  ): Promise<SettingDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/getStationSettings';

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
   * 获取租户的配置信息
   */
  static getTenantSettings(
    options: IRequestOptions = {},
  ): Promise<SettingDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/getTenantSettings';

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
   * 获取用户的配置信息
   */
  static getUserSettings(options: IRequestOptions = {}): Promise<SettingDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/getUserSettings';

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
   * 更新应用的配置信息
   */
  static updateApplicationSettings(
    params: {
      /** input */
      input: UpdateSettingInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/updateApplicationSettings';

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
   * 更新厂站的配置信息
   */
  static updateStationSettings(
    params: {
      /** input */
      input: UpdateSettingInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/updateStationSettings';

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
   * 更新租户的配置信息
   */
  static updateTenantSettings(
    params: {
      /** input */
      input: UpdateSettingInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/updateTenantSettings';

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
   * 更新用户的配置信息
   */
  static updateUserSettings(
    params: {
      /** input */
      input: UpdateSettingInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Settings/updateUserSettings';

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

export class AuditLogService {
  /**
   * 导出审计日志
   */
  static exportLog(
    params: {
      /** 浏览器 */
      browserInfo?: string;
      /** 结束时间 */
      endDate?: Date;
      /** 错误状态 */
      hasException?: boolean;
      /** 操作 */
      methodName?: string;
      /** 服务 */
      serviceName?: string;
      /** 开始时间 */
      startDate?: Date;
      /** 用户名 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auditLog/exportLog';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        browserInfo: params['browserInfo'],
        endDate: params['endDate'],
        hasException: params['hasException'],
        methodName: params['methodName'],
        serviceName: params['serviceName'],
        startDate: params['startDate'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询审计日志
   */
  static getAuditLogs(
    params: {
      /** 浏览器 */
      browserInfo?: string;
      /** 结束时间 */
      endDate?: Date;
      /** 错误状态 */
      hasException?: boolean;
      /** 最大持续时间 */
      maxExecutionDuration?: string;
      /** 操作 */
      methodName?: string;
      /** 最小持续时间 */
      minExecutionDuration?: string;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 服务 */
      serviceName?: string;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 开始时间 */
      startDate?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
      /** 用户名 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<AuditLogListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auditLog/getAuditLogs';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        browserInfo: params['browserInfo'],
        endDate: params['endDate'],
        hasException: params['hasException'],
        maxExecutionDuration: params['maxExecutionDuration'],
        methodName: params['methodName'],
        minExecutionDuration: params['minExecutionDuration'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        serviceName: params['serviceName'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startDate: params['startDate'],
        unPage: params['unPage'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 审计日志详情
   */
  static detail(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<AuditLogDetailDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auditLog/{id}';
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
}

export class CaptchaService {
  /**
   * 获取一个验证码
   */
  static captcha(options: IRequestOptions = {}): Promise<CaptchaOutDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/captcha';

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

export class CommonSettingService {
  /**
   * 创建或更新配置信息
   */
  static createOrUpdateCommonSetting(
    params: {
      /** input */
      input: CreateOrUpdateCommonSettingInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/commonSetting/createOrUpdateCommonSetting';

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
   * 删除配置信息
   */
  static deleteCommonSetting(
    params: {
      /** input */
      input: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/commonSetting/deleteCommonSetting';

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
   * 根据Key获取配置信息
   */
  static getCommonSettingByKey(
    params: {
      /** key */
      key?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<CommonSettingDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/commonSetting/getCommonSettingByKey';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { key: params['key'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取配置信息列表
   */
  static getCommonSettings(
    params: {
      /** 分组名 */
      groupName?: string;
      /** key */
      key?: string;
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
  ): Promise<PagedResultDto<CommonSettingDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/commonSetting/getCommonSettings';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        groupName: params['groupName'],
        key: params['key'],
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
   * 获取分组名称列表
   */
  static getGroupNameList(
    params: {
      /** 根据分组名进行模糊查找 */
      filter?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/commonSetting/getGroupNameList';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { filter: params['filter'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
}

export class ConfigurationService {
  /**
   * 获取系统参数
   */
  static getAll(options: IRequestOptions = {}): Promise<ConfigurationDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/configuration/getAll';

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

export class EditionService {
  /**
   * 新增或编辑版本信息
   */
  static createOrUpdateEdition(
    params: {
      /** input */
      input: EditionEditDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/createOrUpdateEdition';

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
   * 删除版本
   */
  static deleteEdition(
    params: {
      /** input */
      input: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/deleteEdition';

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
   * 导出版本
   */
  static exportEdition(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/export/{id}';
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
   * 获取版本选择列表
   */
  static getEditionComboboxItems(
    params: {
      /** addAllItem */
      addAllItem?: boolean;
      /** onlyFreeItems */
      onlyFreeItems?: boolean;
      /** selectedEditionId */
      selectedEditionId?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<SubscribableEditionComboboxItemDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/getEditionComboboxItems';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        addAllItem: params['addAllItem'],
        onlyFreeItems: params['onlyFreeItems'],
        selectedEditionId: params['selectedEditionId'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取版本信息进行编辑
   */
  static getEditionForEdit(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EditionEditDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/getEditionForEdit';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询版本列表
   */
  static getEditions(
    params: {
      /** 根据版本名进行模糊查找 */
      filter?: string;
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
  ): Promise<PagedResultDto<EditionListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/getEditions';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        filter: params['filter'],
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
   * 导入版本
   */
  static importEdition(
    params: {
      /** file */
      file: any;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/edition/import';

      const configs: IRequestConfig = getConfigs(
        'post',
        'multipart/form-data',
        url,
        options,
      );

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (
          Object.prototype.toString.call(params['file']) === '[object Array]'
        ) {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class FeatureService {
  /**
   * 获取默认的所有特性列表
   */
  static getDefaultFeatures(
    options: IRequestOptions = {},
  ): Promise<TenantFeature[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/getDefaultFeatures';

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
   * 通过租户id获取特性值
   */
  static getTenantFeaturesForEdit(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<TenantFeature[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/getFeaturesForEdit';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取当前租户特性值
   */
  static getTenantFeatures(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/getTenantFeatures';

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
   * 通过版本id获取特性值
   */
  static getTenantFeaturesByEdition(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<TenantFeature[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/getTenantFeaturesByEdition';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 重置租户特性
   */
  static resetTenantSpecificFeatures(
    params: {
      /** 租户id */
      entityDto?: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/resetTenantSpecificFeatures';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['entityDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新/保存版本特性
   */
  static setEditionFeatures(
    params: {
      /** 版本特性 */
      feaInput?: EditionFeatureInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/setEditionFeatures';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['feaInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新/保存租户特性
   */
  static updateTenantFeatures(
    params: {
      /** 租户特性 */
      feaInput?: TenantFeatureInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/updateTenantFeatures';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['feaInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class LoginLogService {
  /**
   * 登录日志导出
   */
  static exportExcel(
    params: {
      /** 验证类型 */
      authType?: string;
      /** 登录ip */
      clientIpAddress?: string;
      /** 登录客户端类型(网页、APP等) */
      clientType?: string;
      /** 查询时段截止时间 */
      endTime?: Date;
      /** 是否成功 */
      isSuccess?: boolean;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 查询时段开始时间 */
      startTime?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
      /** 登录账号名/手机号 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/login/log/export';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        authType: params['authType'],
        clientIpAddress: params['clientIpAddress'],
        clientType: params['clientType'],
        endTime: params['endTime'],
        isSuccess: params['isSuccess'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startTime: params['startTime'],
        unPage: params['unPage'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 登录日志列表
   */
  static list(
    params: {
      /** 验证类型 */
      authType?: string;
      /** 登录ip */
      clientIpAddress?: string;
      /** 登录客户端类型(网页、APP等) */
      clientType?: string;
      /** 查询时段截止时间 */
      endTime?: Date;
      /** 是否成功 */
      isSuccess?: boolean;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 查询时段开始时间 */
      startTime?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
      /** 登录账号名/手机号 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<LoginLogDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/login/log/list';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        authType: params['authType'],
        clientIpAddress: params['clientIpAddress'],
        clientType: params['clientType'],
        endTime: params['endTime'],
        isSuccess: params['isSuccess'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        startTime: params['startTime'],
        unPage: params['unPage'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
}

export class OrganizationUnitService {
  /**
   * 添加用户到组织机构
   */
  static addUsersToOrganizationUnit(
    params: {
      /** input */
      input: UsersToOrganizationUnitInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/addUsersToOrganizationUnit';

      const configs: IRequestConfig = getConfigs(
        'put',
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
   * 新增组织机构
   */
  static createOrganizationUnit(
    params: {
      /** input */
      input: CreateOrganizationUnitInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<OrganizationUnitDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/createOrganizationUnit';

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
   * 删除组织机构
   */
  static deleteOrganizationUnit(
    params: {
      /** input */
      input: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/deleteOrganizationUnit';

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
   * 获取组织机构下的用户, 返回键值对数据
   */
  static findUsers(
    params: {
      /** input */
      input: GetOrganizationUnitUsersInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<NameValueDto_long>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/findUsers';

      const configs: IRequestConfig = getConfigs(
        'put',
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
   * 获取组织机构下的用户
   */
  static getOrganizationUnitUsers(
    params: {
      /** input */
      input: GetOrganizationUnitUsersInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<OrganizationUnitUserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getOrganizationUnitUsers';

      const configs: IRequestConfig = getConfigs(
        'put',
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
   * 组织机构的用户选择下拉列表
   */
  static getOrganizationUnitUsersForSelect(
    params: {
      /** input */
      input: GetOrganizationUnitUsersForSelectInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<OrganizationUnitUserForSelectDto>> {
    return new Promise((resolve, reject) => {
      let url =
        basePath + '/organizationUnit/getOrganizationUnitUsersForSelect';

      const configs: IRequestConfig = getConfigs(
        'put',
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
   * 获取所有组织机构
   */
  static getOrganizationUnits(
    options: IRequestOptions = {},
  ): Promise<ListResultDto<OrganizationStationUnitDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getOrganizationUnits';

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
   * 根据用户ID获取该用户所属的所有组织机构
   */
  static getOrganizationUnitsByUser(
    params: {
      /** 用户id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<OrganizationUnitDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getOrganizationUnitsByUser';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取组织机构节点的父级[包括自身]
   */
  static getParentOrganizations(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ParentOrganizationOutput[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getParentOrganizations';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取当前用户下的所有厂站结构树-（包含普通节点的最小树）
   */
  static getStationTreeOfLoginUser(
    options: IRequestOptions = {},
  ): Promise<OrganizationUnitDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getStationTreeOfLoginUser';

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
   * 获取厂站下拉列表
   */
  static getStations(
    options: IRequestOptions = {},
  ): Promise<NameValueDto_long[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getStations';

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
   * 获取当前用户下的所有厂站
   */
  static getStationsOfLoginUser(
    options: IRequestOptions = {},
  ): Promise<NameValueDefaultByDto_long[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/getStationsOfLoginUser';

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
   * 移动组织机构
   */
  static moveOrganizationUnit(
    params: {
      /** input */
      input: MoveOrganizationUnitInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<OrganizationUnitDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/moveOrganizationUnit';

      const configs: IRequestConfig = getConfigs(
        'put',
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
   * 从组织机构中删除用户
   */
  static removeUserFromOrganizationUnit(
    params: {
      /** input */
      input: UserToOrganizationUnitInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/removeUserFromOrganizationUnit';

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
   * 设置厂站可用/不可用
   */
  static setStationEnabled(
    params: {
      /** enabled */
      enabled?: boolean;
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/setStationEnabled/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { enabled: params['enabled'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新组织机构
   */
  static updateOrganizationUnit(
    params: {
      /** input */
      input: UpdateOrganizationUnitInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<OrganizationUnitDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/organizationUnit/updateOrganizationUnit';

      const configs: IRequestConfig = getConfigs(
        'put',
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

export class TenantPermissionService {
  /**
   * 获取指定版本下的权限清单
   */
  static getEditionPermissionsById(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<RolePermissionDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permission/getEditionPermissionsById';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取指定租户下的权限清单
   */
  static getTenantPermissions(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<RolePermissionDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permission/getTenantPermissions';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 设置版本的权限清单
   */
  static setEditionPermissions(
    params: {
      /** input */
      input: EditionPermissionInputDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/permission/setEditionPermissions';

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

export class RoleService {
  /**
   * 角色批量绑定组织中的用户
   */
  static bindRoleToOrgans(
    params: {
      /** orgaUsersInput */
      orgaUsersInput: BindRoleToOrgInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/bindRoleToOrgans';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['orgaUsersInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 角色批量绑定用户
   */
  static bindRoleToUsers(
    params: {
      /** roleToUserInput */
      roleToUserInput: BindRoleToUserInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/bindRoleToUsers';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['roleToUserInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 创建或修改角色
   */
  static createOrUpdateRole(
    params: {
      /** input */
      input: RoleCreateOrEditDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/createOrUpdateRole';

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
   * 删除角色
   */
  static deleteRole(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/deleteRole';

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取所有角色
   */
  static getAllRoles(options: IRequestOptions = {}): Promise<RoleDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/getAllRoles';

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
   * 查看某个角色详情
   */
  static getRoleDetails(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<RoleDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/getRoleDetails';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询角色列表
   */
  static getRoles(
    params: {
      /** 根据角色名模糊查找 */
      filter?: string;
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
  ): Promise<PagedResultDto<RoleDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/getRoles';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        filter: params['filter'],
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
   * 查找有某角色的用户列表
   */
  static getUsersByRoleId(
    params: {
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 角色id */
      roleId?: string;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
      /** 过滤用户名 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/getUserByRoleId';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        roleId: params['roleId'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        unPage: params['unPage'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 取消用户的角色
   */
  static unbindRoleForUsers(
    params: {
      /** roleForUserDto */
      roleForUserDto: UnbindRoleForUserDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/unbindRoleForUsers';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['roleForUserDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 修改角色下的权限
   */
  static updateRolePermission(
    params: {
      /** input */
      input: UpdateRolePermissionDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/role/updateRolePermission';

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

export class SerialNoService {
  /**
   * 获取重置规则下拉数据源
   */
  static getEnum(
    options: IRequestOptions = {},
  ): Promise<SelectListOutputDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/serialNo/getEnum';

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
   * 分页查询序列号（需要权限）
   */
  static getPageData(
    params: {
      /** 单据类型 */
      billType?: string;
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
  ): Promise<PagedResultDto<SerialNoDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/serialNo/getPageData';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        billType: params['billType'],
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
   * 测试获取下一个票号（不占用序列号）
   */
  static testNextNo(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/serialNo/testNextNo/{id}';
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
   * 测试票号配置，获取当前配置的序列号结果
   */
  static testNo(
    params: {
      /** noFormat */
      noFormat?: string;
      /** serialLength */
      serialLength?: number;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/serialNo/testNo';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        noFormat: params['noFormat'],
        serialLength: params['serialLength'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新序列号配置
   */
  static update(
    params: {
      /** input */
      input: SerialNoEditInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/serialNo/update';

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

export class SysCodeTypeService {
  /**
   * 查询配置类型定义
   */
  static list(options: IRequestOptions = {}): Promise<SysCodeTypeDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysCodeType/list';

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

export class SysCodeValueService {
  /**
   * 增加/修改配置常量
   */
  static add(
    params: {
      /** sysCodeValueDto */
      sysCodeValueDto: SysCodeValueDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<SysCodeValueDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysCodeValue/add';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['sysCodeValueDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除配置常量
   */
  static delete(
    params: {
      /** ids */
      ids: any | null[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysCodeValue/delete';

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
   * 查询配置常量分页
   */
  static list(
    params: {
      /** inputDto */
      inputDto: SysCodeValuePagedReqDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<SysCodeValueDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysCodeValue/list';

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
   * 批量增加/修改配置常量
   */
  static saveAll(
    params: {
      /** inputList */
      inputList: SysCodeValueDto[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysCodeValue/saveAll';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['inputList'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class SysMenuService {
  /**
   * 根据id删除(包括子节点)
   */
  static delete(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysMenu/delete';

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除全部
   */
  static deleteAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysMenu/deleteAll';

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
   * 根据id删除(不包括子节点)
   */
  static deleteCurrent(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysMenu/deleteCurrent';

      const configs: IRequestConfig = getConfigs(
        'delete',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询菜单
   */
  static list(
    params: {
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 前端路由parentRouteName */
      parentRouteName?: string;
      /** 前端路由name */
      routeName?: string;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 菜单名 */
      title?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<GetSysMenuListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysMenu/list';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        parentRouteName: params['parentRouteName'],
        routeName: params['routeName'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        title: params['title'],
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
   * 保存菜单数据
   */
  static save(
    params: {
      /** input */
      input: SysMenuInputDto[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<SysMenuInputDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/sysMenu/save';

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

export class TenantService {
  /**
   * 创建租户
   */
  static createTenant(
    params: {
      /** input */
      input: CreateTenantInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/createTenant';

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
   * 删除租户
   */
  static deleteTenant(
    params: {
      /** entityDto */
      entityDto: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/deleteTenant';

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
   * 获取租户信息进行编辑
   */
  static getTenantForEdit(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<TenantEditDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/getTenantForEdit';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 查询租户列表
   */
  static getTenants(
    params: {
      /** 创建时间区间结束时间 */
      creationDateEnd?: Date;
      /** 创建时间区间起始时间 */
      creationDateStart?: Date;
      /** 租户关联的版本的唯一标识 */
      editionId?: string;
      /** 根据租户名模糊查找 */
      filter?: string;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 订阅到期区间结束时间 */
      subscriptionEndDateEnd?: Date;
      /** 订阅到期区间起始时间 */
      subscriptionEndDateStart?: Date;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<TenantListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/getTenants';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        creationDateEnd: params['creationDateEnd'],
        creationDateStart: params['creationDateStart'],
        editionId: params['editionId'],
        filter: params['filter'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        subscriptionEndDateEnd: params['subscriptionEndDateEnd'],
        subscriptionEndDateStart: params['subscriptionEndDateStart'],
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
   * 宿主修改租户管理员密码
   */
  static changeTenantAdminPasswordByHost(
    params: {
      /** 租户管理员重置密码 */
      newPwd: string;
      /** 租户ID */
      tenantId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/host/change-password';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = {
        newPwd: params['newPwd'],
        tenantId: params['tenantId'],
      };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 宿主以租户用户登录
   */
  static hostTenantImpersonation(
    params: {
      /** 租户ID */
      tenantId: string;
      /** 租户用户ID */
      userId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/host/impersonation';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = {
        tenantId: params['tenantId'],
        userId: params['userId'],
      };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 宿主以租户用户登录后返回到宿主
   */
  static backToHost(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/host/impersonation-back';

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
   * 宿主以租户用户登录时-切换至其他用户登录
   */
  static hostTenantImpersonationOther(
    params: {
      /** 租户用户ID */
      userId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/host/impersonation-other';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { userId: params['userId'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 租户是否可用
   */
  static isTenantAvailable(
    params: {
      /** 租户代码 */
      tenantName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<IsTenantAvailableOutput> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/isTenantAvailable';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { tenantName: params['tenantName'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新租户
   */
  static updateTenant(
    params: {
      /** editDto */
      editDto: TenantEditDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/updateTenant';

      const configs: IRequestConfig = getConfigs(
        'put',
        'application/json',
        url,
        options,
      );

      let data = params['editDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取指定租户用户列表
   */
  static getTenantUserList(
    params: {
      /** 模糊查找[姓名、账号、电子邮箱、手机号、角色名] */
      filter?: string;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** tenantId */
      tenantId: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tenant/{tenantId}/user/list';
      url = url.replace('{tenantId}', params['tenantId'] + '');

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        filter: params['filter'],
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
}

export class ToDoService {
  /**
   * 获取代办的枚举类型
   */
  static getDeviceEnums(options: IRequestOptions = {}): Promise<EnumOutputDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/todo/getTodoEnums';

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
   * 查询待办清单
   */
  static getTodos(
    params: {
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 类型标题模糊查询 */
      title?: string;
      /** 待办类型编码，in 查询，也就是满足其一即可 */
      type?: string[];
      /** 类型名称模糊查询 */
      typeName?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<TodoInfoDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/todo/getTodos';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        sorting: params['sorting'],
        sortingDirection: params['sortingDirection'],
        title: params['title'],
        type: params['type'],
        typeName: params['typeName'],
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
   * 忽略待办
   */
  static ignore(
    params: {
      /** id */
      id: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/todo/ignore/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TokenAuthService {
  /**
   * 测试用的登陆接口，前端不要用来做登陆
   */
  static authenticate(
    params: {
      /** input */
      input: LoginRequest;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/authenticate';

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
   * 登出接口
   */
  static logout(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/logout';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 刷新token
   */
  static refresh(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/refresh';

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
   * 获取扫码登陆的唯一的key
   */
  static getScanCodeKey(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/scan-code/key';

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
   * 对指定的key执行扫码登陆，目前是1年的token
   */
  static scanCodeLogin(
    params: {
      /** key */
      key: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/scan-code/login/{key}';
      url = url.replace('{key}', params['key'] + '');

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
   * 获取扫码登陆的key对应的token，可能不存在key的情况 code为1001
   */
  static getScanCodeToken(
    params: {
      /** key */
      key: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<BaseApiResult_string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/token-auth/scan-code/token/{key}';
      url = url.replace('{key}', params['key'] + '');

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

export class UserService {
  /**
   * 修改密码
   */
  static changePassword(
    params: {
      /** cpi */
      cpi: ChangePasswordInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/changePassword';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['cpi'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 创建/修改用户（可修改用户名）
   */
  static createOrUpdateUser(
    params: {
      /** createOrUpdateUserInput */
      createOrUpdateUserInput: CreateOrUpdateUserInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/createOrUpdateUser';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['createOrUpdateUserInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 创建/修改用户（不可修改用户名）
   */
  static createOrUpdateUserExistByUserName(
    params: {
      /** createOrUpdateUserInput */
      createOrUpdateUserInput: CreateOrUpdateUserInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/createOrUpdateUserExistByUserName';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['createOrUpdateUserInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 删除用户
   */
  static deleteUser(
    params: {
      /** entityDto */
      entityDto: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/deleteUser';

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
   * 批量删除用户
   */
  static deleteUsers(
    params: {
      /** entityDtos */
      entityDtos: EntityDto[];
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/deleteUsers';

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
   * 获取所有用户列表（不分页）
   */
  static getAllUsers(options: IRequestOptions = {}): Promise<UserListDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getAllUsers';

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
   * 获取登录用户的角色
   */
  static getCurrentRoles(options: IRequestOptions = {}): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getCurrentRoles';

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
   * 获取当前厂站的用户列表
   */
  static getOrgaUsers(
    params: {
      /** 模糊查找[姓名、账号、电子邮箱、手机号、角色名、工号] */
      filter?: string;
      /** 组织机构Id */
      orgaId?: string;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 角色id */
      roleId?: string;
      /** 角色 name */
      roleName?: string;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getOrgaUsers';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        filter: params['filter'],
        orgaId: params['orgaId'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        roleId: params['roleId'],
        roleName: params['roleName'],
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
   * 获取当前用户详情
   */
  static getUserInfo(
    options: IRequestOptions = {},
  ): Promise<GetUserForEditOutput> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUserInfo';

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
   * 获取用户列表
   */
  static getUsers(
    params: {
      /** 模糊查找[姓名、账号、电子邮箱、手机号、角色名、工号] */
      filter?: string;
      /** 只显示锁定用户 */
      onlyLockedUsers?: boolean;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 权限代码 */
      permission?: string;
      /** 角色code */
      roleCode?: string;
      /** 角色id */
      roleId?: string;
      /** 角色 name */
      roleName?: string;
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsers';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        filter: params['filter'],
        onlyLockedUsers: params['onlyLockedUsers'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        permission: params['permission'],
        roleCode: params['roleCode'],
        roleId: params['roleId'],
        roleName: params['roleName'],
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
   * 通过角色Code列表获取所有用户
   */
  static getUsersByRoleCodes(
    params: {
      /** 是否满足所有角色 */
      allRoles?: boolean;
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 角色code列表 */
      roleCodeList?: string[];
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserListDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsersByRoleCodes';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        allRoles: params['allRoles'],
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        roleCodeList: params['roleCodeList'],
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
   * 通过角色名称列表获取所有用户
   */
  static getUsersByRoleNames(
    params: {
      /** 页码 */
      pageNumber?: number;
      /** 每页显示的记录数 */
      pageSize?: number;
      /** 角色名称列表 */
      roleNames?: string[];
      /** 排序字段名 */
      sorting?: string;
      /** 排序的方式 */
      sortingDirection?: string;
      /** 是否不分页，默认分页 */
      unPage?: boolean;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PagedResultDto<UserForSelectDto>> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsersByRoleNames';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        pageNumber: params['pageNumber'],
        pageSize: params['pageSize'],
        roleNames: params['roleNames'],
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
   * 获取当前用户详情用于编辑
   */
  static getUsersForEdit(
    params: {
      /** 唯一标识 */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GetUserForEditOutput> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsersForEdit';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = { id: params['id'] };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 获取用户名称列表用于登陆
   */
  static getUsersForLogin(
    params: {
      /** 姓名 */
      name?: string;
      /** 姓名拼音 */
      surName?: string;
      /** 账户名 */
      userName?: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<UserListForLoginDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsersForLogin';

      const configs: IRequestConfig = getConfigs(
        'get',
        'application/json',
        url,
        options,
      );
      configs.params = {
        name: params['name'],
        surName: params['surName'],
        userName: params['userName'],
      };

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      console.warn(
        '适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body',
      );

      axios(configs, resolve, reject);
    });
  }
  /**
   * 导出用户到excel
   */
  static getUsersToExcel(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/getUsersToExcel';

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
   * 列表修改密码
   */
  static listChangePwd(
    params: {
      /** input */
      input: ChangePwdInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/list/change-pwd';

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
   * 用户上传（头像、签字）图片
   */
  static saveMyselfPicture(
    params: {
      /** minioId */
      minioId: string;
      /** signature或者profile */
      type: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/saveMyselfPicture';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = { minioId: params['minioId'], type: params['type'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 管理员上传（头像、签字）图片
   */
  static saveUserPicture(
    params: {
      /** minioId */
      minioId: string;
      /** signature或者profile */
      type: string;
      /** userId */
      userId: string;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/saveUserPicture';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );
      configs.params = {
        minioId: params['minioId'],
        type: params['type'],
        userId: params['userId'],
      };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 设置默认厂站
   */
  static setDefaultStation(
    params: {
      /** setDefaultStationInput */
      setDefaultStationInput: SetDefaultStationInput;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/setDefaultStation';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['setDefaultStationInput'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 解锁用户
   */
  static unlockUser(
    params: {
      /** entityDto */
      entityDto: EntityDto;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/unlockUser';

      const configs: IRequestConfig = getConfigs(
        'post',
        'application/json',
        url,
        options,
      );

      let data = params['entityDto'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * 更新个人信息
   */
  static updateUserInfoBySelf(
    params: {
      /** input */
      input: UpdateUserInfo;
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user/updateUserInfoBySelf';

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

export interface AuditLogDetailDto {
  /**  */
  browserInfo?: string;

  /**  */
  clientIpAddress?: string;

  /**  */
  clientName?: string;

  /**  */
  customData?: string;

  /**  */
  exception?: string;

  /**  */
  executionDuration?: number;

  /**  */
  executionTime?: Date;

  /** 唯一标识 */
  id?: string;

  /**  */
  methodName?: string;

  /**  */
  orgId?: string;

  /**  */
  parameters?: string;

  /** 方法返回值 */
  result?: string;

  /**  */
  serviceName?: string;

  /**  */
  userId?: string;

  /**  */
  userName?: string;
}

export interface AuditLogListDto {
  /**  */
  browserInfo?: string;

  /**  */
  clientIpAddress?: string;

  /**  */
  clientName?: string;

  /**  */
  customData?: string;

  /**  */
  executionDuration?: number;

  /**  */
  executionTime?: Date;

  /** 唯一标识 */
  id?: string;

  /**  */
  methodName?: string;

  /**  */
  serviceName?: string;

  /**  */
  userId?: string;

  /**  */
  userName?: string;
}

export interface AuthConfigDto {
  /**  */
  granted?: boolean;

  /**  */
  permissionCode?: string;
}

export interface BaseApiResult_string {
  /**  */
  code?: number;

  /**  */
  data?: string;

  /**  */
  message?: string;

  /**  */
  success?: boolean;
}

export interface BindRoleToOrgInput {
  /** 是否包含子区域 */
  includeChild?: boolean;

  /** 组织id列表 */
  orgIds?: number[];

  /** 角色id */
  roleId?: string;
}

export interface BindRoleToUserInput {
  /** 设置给用户的角色id */
  roleId?: string;

  /** 需要设置角色的userIds */
  userIds?: number[];
}

export interface CaptchaOutDto {
  /** 验证码图片base64 */
  imageBase64?: string;

  /** 获取验证码的key，登陆的时候需要返回回来 */
  key?: string;
}

export interface ChangePasswordInput {
  /**  */
  newPasswd?: string;

  /**  */
  oldPasswd?: string;
}

export interface ChangePwdInput {
  /** 新密码 */
  newPwd?: string;

  /** 选中的用户id */
  userId?: string;
}

export interface CommonSettingDto {
  /** 描述 */
  description?: string;

  /** 分组名 */
  groupName?: string;

  /** 唯一标识 */
  id?: string;

  /** key */
  key?: string;

  /** value */
  value?: string;
}

export interface ConfigurationDto {
  /**  */
  auth?: AuthConfigDto[];

  /**  */
  currentUser?: UserContext;

  /**  */
  featureConfig?: FeatureConfigDto;

  /**  */
  loginInfo?: LoginInfoDto;

  /**  */
  tenantConfig?: TenantConfigDto;

  /**  */
  userInfo?: GetUserForEditOutput;
}

export interface CreateOrEditRolePermissionDto {
  /**  */
  name?: string;
}

export interface CreateOrUpdateCommonSettingInput {
  /** 描述 */
  description?: string;

  /** 分组名 */
  groupName?: string;

  /** 唯一标识 */
  id?: string;

  /** key */
  key?: string;

  /** value */
  value?: string;
}

export interface CreateOrUpdateUserInput {
  /** 角色id列表 结果以入参为准, 字段为null则不处理 */
  assignedRoleIds?: number[];

  /** 机构id列表 */
  organizationUnits?: number[];

  /** 是否生成随机密码 */
  setRandomPassword?: boolean;

  /**  */
  user?: UserEditDto;
}

export interface CreateOrganizationUnitInput {
  /** 名称 */
  displayName?: string;

  /** 父组织机构id */
  parentId?: string;

  /** 序号 */
  sortIndex?: number;

  /** 是否为厂站 */
  station?: boolean;
}

export interface CreateTenantInput {
  /** 租户是否激活 */
  active?: boolean;

  /** 管理员邮箱地址 */
  adminEmailAddress?: string;

  /** 管理员密码 */
  adminPassword?: string;

  /** 管理员账户名 */
  adminUserName?: string;

  /** 数据库密码 */
  connPassword?: string;

  /** 连接url */
  connUrl?: string;

  /** 数据库帐户名 */
  connUserName?: string;

  /** 描述 */
  description?: string;

  /** 版本的唯一标识id */
  editionId?: string;

  /** 租户名 */
  name?: string;

  /** 是否发送激活账户邮件 */
  sendActivationEmail?: boolean;

  /** 下次登录是否需要修改密码 */
  shouldChangePasswordOnNextLogin?: boolean;

  /** 订阅到期时间 */
  subscriptionEndDateUtc?: Date;

  /** 租户代码 */
  tenantName?: string;

  /** 是否公用数据库 */
  useDefaultDb?: boolean;
}

export interface EditionEditDto {
  /** 每年的价格 */
  annualPrice?: number;

  /** 显示的名称 */
  displayName?: string;

  /** 关联的过期版本id */
  expiringEditionId?: string;

  /** 唯一标识 */
  id?: string;

  /** 每月的价格 */
  monthlyPrice?: number;

  /** 试用天数 */
  trialDayCount?: number;

  /**  */
  version?: number;

  /** 过期后多少天执行某些操作 */
  waitingDayAfterExpire?: number;
}

export interface EditionFeatureInputDto {
  /** 版本id */
  editionId?: string;

  /** 特性 */
  featureList?: FeatureValueInput[];
}

export interface EditionListDto {
  /** 创建时间 */
  createTime?: Date;

  /** 显示的名称 */
  displayName?: string;

  /** 唯一标识 */
  id?: string;

  /** 名称 */
  name?: string;
}

export interface EditionPermissionInputDto {
  /**  */
  id?: string;

  /**  */
  permissions?: string[];
}

export interface EntityDto {
  /** 唯一标识 */
  id?: string;
}

export interface EnumOutputDto {
  /** 代办MQTT消息类型 */
  toDoMQTTTypeEnumList?: SelectListOutputDto[];
}

export interface FeatureConfigDto {
  /**  */
  allFeatures?: object;
}

export interface FeatureValueInput {
  /** 特性名称 */
  name?: string;

  /** 特性值 */
  value?: string;
}

export interface GetOrganizationUnitUsersForSelectInput {
  /** 搜索关键字(姓名/账号) */
  filter?: string;

  /** 组织机构id */
  orgId?: string;

  /** 页码 */
  pageNumber?: number;

  /** 每页显示的记录数 */
  pageSize?: number;

  /** 排序字段名 */
  sorting?: string;

  /** 排序的方式 */
  sortingDirection?: EnumGetOrganizationUnitUsersForSelectInputSortingDirection;

  /** 是否不分页，默认分页 */
  unPage?: boolean;
}

export interface GetOrganizationUnitUsersInput {
  /** 深度查询(即包括子节点的人员, 默认true) */
  deepQuery?: boolean;

  /** 搜索关键字(姓名/账号) */
  filter?: string;

  /** 组织机构id */
  organizationUnitIds?: number[];

  /** 页码 */
  pageNumber?: number;

  /** 每页显示的记录数 */
  pageSize?: number;

  /** 排序字段名 */
  sorting?: string;

  /** 排序的方式 */
  sortingDirection?: EnumGetOrganizationUnitUsersInputSortingDirection;

  /** 是否不分页，默认分页 */
  unPage?: boolean;
}

export interface GetSysMenuListDto {
  /** 图标class */
  iconClass?: string;

  /** 图标类型 */
  iconType?: string;

  /** 唯一标识 */
  id?: string;

  /** 是否屏蔽菜单 */
  ignored?: boolean;

  /** 路由的name */
  parentRouteName?: string;

  /** 前端路由名 */
  routeName?: string;

  /** 排序 */
  sortIndex?: number;

  /** 菜单名 */
  title?: string;

  /** 菜单类型 */
  type?: EnumGetSysMenuListDtoType;
}

export interface GetUserForEditOutput {
  /**  */
  memberedOrganizationUnits?: number[];

  /**  */
  roles?: UserRoleDto[];

  /**  */
  user?: UserEditDto;

  /**  */
  userOrgaDtoList?: UserOrgaDto[];
}

export interface GrantedAuthority {
  /**  */
  authority?: string;
}

export interface InputType {
  /**  */
  attributes?: KV[];

  /**  */
  itemSource?: ItemSource;

  /**  */
  name?: string;

  /**  */
  validator?: Validator;
}

export interface IsTenantAvailableOutput {
  /** 租户状态 */
  state?: EnumIsTenantAvailableOutputState;

  /** 租户id */
  tenantId?: string;
}

export interface Item {
  /**  */
  displayText?: string;

  /**  */
  value?: string;
}

export interface ItemSource {
  /**  */
  items?: Item[];
}

export interface KV {
  /**  */
  key?: string;

  /**  */
  value?: string;
}

export interface LoginInfoDto {
  /** 是否需要验证码 */
  needCaptcha?: boolean;
}

export interface LoginLogDto {
  /** 验证类型 */
  authType?: EnumLoginLogDtoAuthType;

  /** 验证类型 */
  authTypeName?: string;

  /** 浏览器信息 */
  browserInfo?: string;

  /** 登录ip */
  clientIpAddress?: string;

  /** 登录客户端类型(网页、APP等) */
  clientType?: string;

  /** 登录耗时 */
  executionDuration?: number;

  /** 登录时间 */
  executionTime?: Date;

  /** 唯一标识 */
  id?: string;

  /** 是否成功 */
  isSuccess?: boolean;

  /** 登录失败原因 */
  message?: string;

  /** 姓名,如果能匹配上 */
  name?: string;

  /** 登录请求参数 */
  params?: string;

  /** 登录账号名/手机号 */
  userName?: string;
}

export interface LoginRequest {
  /** 验证码 */
  captcha?: string;

  /** 验证码的key */
  key?: string;

  /** 帐户名 */
  username?: string;

  /** 密码 */
  password?: string;
}

export interface Map_string_string {}

export interface MoveOrganizationUnitInput {
  /** 唯一标识 */
  id?: string;

  /** 新父组织机构id */
  newParentId?: string;
}

export interface NameValueDefaultByDto_long {
  /**  */
  defaultBy?: boolean;

  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface NameValueDto_long {
  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface NameValueDto_string {
  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface OrganizationStationUnitDto {
  /** 编码 */
  code?: string;

  /** 创建者 */
  createId?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 名称 */
  displayName?: string;

  /** 唯一标识 */
  id?: string;

  /** 修改者 */
  lastModifyId?: string;

  /** 修改时间 */
  lastModifyTime?: Date;

  /** 父组织机构id */
  parentId?: string;

  /** 序号 */
  sortIndex?: number;

  /** 是否为厂站 */
  station?: boolean;

  /** 厂站是否可用 */
  stationEnabled?: boolean;

  /** 租户id */
  tenantId?: string;

  /** 版本 */
  version?: number;
}

export interface OrganizationUnitDto {
  /** 编码 */
  code?: string;

  /** 创建者 */
  createId?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 名称 */
  displayName?: string;

  /** 唯一标识 */
  id?: string;

  /** 修改者 */
  lastModifyId?: string;

  /** 修改时间 */
  lastModifyTime?: Date;

  /** 父组织机构id */
  parentId?: string;

  /** 序号 */
  sortIndex?: number;

  /** 是否为厂站 */
  station?: boolean;

  /** 租户id */
  tenantId?: string;

  /** 版本 */
  version?: number;
}

export interface OrganizationUnitUserForSelectDto {
  /** 用户id */
  id?: string;

  /** 姓名 */
  name?: string;

  /** 账号 */
  userName?: string;
}

export interface OrganizationUnitUserListDto {
  /** 邮箱地址 */
  emailAddress?: string;

  /** 用户id */
  id?: string;

  /** 姓名 */
  name?: string;

  /** 所属组织机构id */
  organizationUnitId?: string;

  /** 所属组织机构名称 */
  organizationUnitName?: string;

  /** 账号 */
  userName?: string;
}

export interface ParentOrganizationOutput {
  /** 组织机构名称 */
  displayName?: string;

  /** 组织机构id */
  id?: string;

  /**  */
  sortId?: number;

  /** 是否为厂站 */
  station?: boolean;
}

export interface RoleCreateOrEditDto {
  /**  */
  default?: boolean;

  /** 唯一标识 */
  id?: string;

  /** 角色代码 */
  roleCode?: string;

  /** 角色名称 */
  roleName?: string;

  /** 版本号 */
  version?: number;
}

export interface RoleDto {
  /** 创建时间 */
  createTime?: Date;

  /** 创建人名称 */
  createUserName?: string;

  /**  */
  default?: boolean;

  /** 唯一标识 */
  id?: string;

  /** 权限列表 */
  permissionList?: RolePermissionDto[];

  /** 角色代码 */
  roleCode?: string;

  /** 角色名称 */
  roleName?: string;
}

export interface RolePermissionDto {
  /**  */
  displayName?: string;

  /**  */
  granted?: boolean;

  /**  */
  name?: string;

  /**  */
  parentName?: string;
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

export interface SerialNoDto {
  /** 单据类型 */
  billType?: string;

  /** 当前序号 */
  currentNo?: string;

  /** 日期格式化 */
  dateFormat?: string;

  /** 唯一标识 */
  id?: string;

  /** 最后一次的序列号 */
  lastNo?: string;

  /** 上一次获取序列号时间 */
  lastUpdateTime?: Date;

  /** 自增长序号长度 */
  noLength?: number;

  /** 重置类型 */
  resetType?: EnumSerialNoDtoResetType;
}

export interface SerialNoEditInput {
  /** 当前序号 */
  currentNo?: string;

  /** 日期格式化 */
  dateFormat?: string;

  /** 主键 */
  id?: string;

  /** 自增长序号长度 */
  noLength?: number;

  /** 重置类型 */
  resetType?: EnumSerialNoEditInputResetType;
}

export interface SetDefaultStationInput {
  /** 厂站id */
  stationId?: string;
}

export interface SettingDto {
  /** 默认值 */
  defaultValue?: string;

  /** 描述 */
  description?: string;

  /** 显示的名称 */
  displayName?: string;

  /** 文件下载链接 */
  downloadUrl?: string;

  /** 文件名 */
  fileName?: string;

  /** 输入类型 */
  inputType?: InputType;

  /** 名称， 唯一标识 */
  name?: string;

  /**  */
  parentName?: string;

  /** 配置值 */
  value?: string;
}

export interface SubscribableEditionComboboxItemDto {
  /** 显示名 */
  displayText?: string;

  /**  */
  isFree?: boolean;

  /**  */
  selected?: boolean;

  /** 值 */
  value?: string;
}

export interface SysCodeTypeDto {
  /** 是否继承自宿主，该值为true 则不显示右上角新增按钮 */
  extendOwner?: boolean;

  /** 配置常量类型代码 */
  typeCode?: string;

  /** 配置常量类型名 */
  typeName?: string;
}

export interface SysCodeValueDto {
  /** 配置常量名 */
  code?: string;

  /** 配置常量描述 */
  describe?: string;

  /** 唯一标识 */
  id?: string;

  /** 配置常量所属父节点ID */
  parentId?: string;

  /** 置常量在所属类型组排序 */
  sortIndex?: number;

  /** 配置常量类型代码 */
  typeCode?: string;

  /** 配置常量值 */
  value?: string;

  /**  */
  version?: number;
}

export interface SysCodeValuePagedReqDto {
  /** 代码匹配搜索 */
  code?: string;

  /** 搜索参数 */
  filter?: string;

  /** 查询模式 */
  listMode?: EnumSysCodeValuePagedReqDtoListMode;

  /** 页码 */
  pageNumber?: number;

  /** 每页显示的记录数 */
  pageSize?: number;

  /** 排序字段名 */
  sorting?: string;

  /** 排序的方式 */
  sortingDirection?: EnumSysCodeValuePagedReqDtoSortingDirection;

  /** 配置常量所属类型代码 */
  typeCodeList?: string[];

  /** 是否不分页，默认分页 */
  unPage?: boolean;
}

export interface SysMenuInputDto {
  /**  */
  iconClass?: string;

  /**  */
  iconType?: string;

  /** 唯一标识 */
  id?: string;

  /** 是否屏蔽菜单 */
  ignored?: boolean;

  /**  */
  parentRouteName?: string;

  /**  */
  routeName?: string;

  /**  */
  sortIndex?: number;

  /**  */
  title?: string;

  /**  */
  type?: EnumSysMenuInputDtoType;
}

export interface TenantConfigDto {
  /**  */
  description?: string;

  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  tenantName?: string;
}

export interface TenantEditDto {
  /** 租户是否激活 */
  active?: boolean;

  /** 数据库密码 */
  connPassword?: string;

  /** 连接url */
  connUrl?: string;

  /** 数据库帐户名 */
  connUserName?: string;

  /** 描述 */
  description?: string;

  /** 版本的唯一标识id */
  editionId?: string;

  /** 唯一标识 */
  id?: string;

  /** 是否在试用期 */
  inTrialPeriod?: boolean;

  /** 租户名 */
  name?: string;

  /** 订阅到期时间 */
  subscriptionEndDateUtc?: Date;

  /** 租户代码 */
  tenantName?: string;

  /**  */
  version?: number;
}

export interface TenantFeature {
  /**  */
  defaultValue?: string;

  /**  */
  description?: string;

  /**  */
  displayName?: string;

  /**  */
  featureValue?: string;

  /**  */
  inputType?: InputType;

  /**  */
  name?: string;

  /**  */
  parentName?: string;
}

export interface TenantFeatureInputDto {
  /** 特性 */
  featureList?: FeatureValueInput[];

  /** 租户id */
  tenantId?: string;
}

export interface TenantListDto {
  /** 租户是否激活 */
  active?: boolean;

  /** 数据库密码 */
  connPassword?: string;

  /** 连接url */
  connUrl?: string;

  /** 数据库帐户名 */
  connUserName?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 描述 */
  description?: string;

  /** 版本名称 */
  editionDisplayName?: string;

  /** 租户关联的版本的唯一标识id */
  editionId?: string;

  /** 唯一标识 */
  id?: string;

  /** 租户名称 */
  name?: string;

  /** 订阅到期时间 */
  subscriptionEndDateUtc?: Date;

  /** 租户代码 */
  tenantName?: string;
}

export interface TodoInfoDto {
  /** 关联业务id */
  businessId?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 拓展字段 */
  extensions?: string;

  /** 主键 */
  id?: string;

  /** 上一提交人 */
  preHandler?: string;

  /** 发起人 */
  starter?: string;

  /** 业务状态 */
  state?: string;

  /** 待办标题 */
  title?: string;

  /** 类型编码 */
  type?: string;

  /** 类型名称 */
  typeName?: string;
}

export interface UnbindRoleForUserDto {
  /** 设置给用户的角色id */
  roleId?: string;

  /** 需要设置角色的userIds */
  userIds?: number[];
}

export interface UpdateOrganizationUnitInput {
  /** 名字 */
  displayName?: string;

  /** 唯一标识 */
  id?: string;

  /** 父组织机构id */
  parentId?: string;

  /** 序号 */
  sortIndex?: number;

  /** 是否为厂站 */
  station?: boolean;
}

export interface UpdateRolePermissionDto {
  /** 唯一标识 */
  id?: string;

  /** 权限列表 */
  permissions?: CreateOrEditRolePermissionDto[];
}

export interface UpdateSettingInput {
  /**  */
  nameValues?: NameValueDto_string[];
}

export interface UpdateUserInfo {
  /** 邮箱地址 ps：尚未支持更换邮箱验证 */
  emailAddress?: string;

  /** 姓名 */
  name?: string;

  /** 手机号 ps：尚未支持更换手机号验证 */
  phoneNo?: string;
}

export interface UserContext {
  /**  */
  authorities?: GrantedAuthority[];

  /** jwt有效秒数 */
  duration?: string;

  /** jwt过期时间 */
  expiration?: Date;

  /**  */
  hostImpersonation?: boolean;

  /** 宿主用户ID */
  hostUserId?: string;

  /**  */
  id?: string;

  /**  */
  isAdmin?: boolean;

  /**  */
  name?: string;

  /**  */
  tenantId?: string;
}

export interface UserEditDto {
  /** 是否激活，激活就显示可选激活开始和结束日期 */
  active?: boolean;

  /** 激活结束日期，可空 */
  activeEndDate?: Date;

  /** 激活开始日期，可空 */
  activeStartDate?: Date;

  /** 是否管理员 */
  admin?: boolean;

  /** 电子邮件地址 */
  emailAddress?: string;

  /** 唯一标识 */
  id?: string;

  /** 姓名 */
  name?: string;

  /** 密码 */
  password?: string;

  /** 电话号码 */
  phoneNo?: string;

  /** 头像图片 */
  profilePictureId?: string;

  /** 下次登陆是否强制修改密码 */
  shouldChangePasswordOnNextLogin?: boolean;

  /** 签字图片 */
  signaturePictureId?: string;

  /**  */
  surName?: string;

  /** 账号 */
  userName?: string;

  /** 工号 */
  workNumber?: string;
}

export interface UserForSelectDto {
  /** 电子邮箱地址 */
  emailAddress?: string;

  /** 唯一标识 */
  id?: string;

  /** 姓名 */
  name?: string;

  /** 电话号码 */
  phoneNo?: string;

  /** 姓名拼音 */
  surName?: string;

  /** 账号 */
  userName?: string;

  /** 角色列表 */
  userRoles?: UserListRoleDto[];
}

export interface UserListDto {
  /** 是否激活 */
  active?: boolean;

  /** 是否管理员 */
  admin?: boolean;

  /** 创建时间 */
  createTime?: Date;

  /** 电子邮箱地址 */
  emailAddress?: string;

  /** 是否确认邮箱 */
  emailConfirmed?: boolean;

  /** 唯一标识 */
  id?: string;

  /** 是否被锁定 */
  lock?: boolean;

  /** 姓名 */
  name?: string;

  /** 电话号码 */
  phoneNo?: string;

  /** 头像图片 */
  profilePictureId?: string;

  /** 签字图片 */
  signaturePictureId?: string;

  /** 姓名拼音 */
  surName?: string;

  /** 账号 */
  userName?: string;

  /** 角色列表 */
  userRoles?: UserListRoleDto[];

  /** 工号 */
  workNumber?: string;
}

export interface UserListForLoginDto {
  /** 唯一标识 */
  id?: string;

  /** 姓名 */
  name?: string;

  /** 姓名拼音 */
  surName?: string;

  /** 账户名 */
  userName?: string;
}

export interface UserListRoleDto {
  /**  */
  id?: string;

  /**  */
  roleName?: string;
}

export interface UserOrgaDto {
  /** 编码 */
  code?: string;

  /** 名称 */
  displayName?: string;

  /** id */
  id?: string;

  /** 父组织机构id */
  parentId?: string;

  /** 序号 */
  sortIndex?: number;

  /** 是否为厂站 */
  station?: boolean;
}

export interface UserRoleDto {
  /**  */
  assigned?: boolean;

  /** 角色代码 */
  roleCode?: string;

  /** 角色id */
  roleId?: string;

  /** 角色名称 */
  roleName?: string;
}

export interface UserToOrganizationUnitInput {
  /** 组织机构id */
  organizationUnitId?: string;

  /** 用户id */
  userId?: string;
}

export interface UsersToOrganizationUnitInput {
  /** 组织机构id */
  organizationUnitId?: string;

  /** 用户id列表 */
  userIds?: number[];
}

export interface Validator {
  /**  */
  attributes?: KV[];

  /**  */
  name?: string;
}
export enum EnumGetOrganizationUnitUsersForSelectInputSortingDirection {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}
export enum EnumGetOrganizationUnitUsersInputSortingDirection {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}
export enum EnumGetSysMenuListDtoType {
  'System' = 'System',
  'Custom' = 'Custom',
}
export enum EnumIsTenantAvailableOutputState {
  'Available' = 'Available',
  'InActive' = 'InActive',
  'NotFound' = 'NotFound',
}
export enum EnumLoginLogDtoAuthType {
  'UsernamePassword' = 'UsernamePassword',
  'MobileCaptcha' = 'MobileCaptcha',
}
export enum EnumSerialNoDtoResetType {
  'Day' = 'Day',
  'Month' = 'Month',
  'Year' = 'Year',
  'Never' = 'Never',
}
export enum EnumSerialNoEditInputResetType {
  'Day' = 'Day',
  'Month' = 'Month',
  'Year' = 'Year',
  'Never' = 'Never',
}
export enum EnumSysCodeValuePagedReqDtoListMode {
  'ALL' = 'ALL',
  'ENABLED' = 'ENABLED',
  'DISABLED' = 'DISABLED',
}
export enum EnumSysCodeValuePagedReqDtoSortingDirection {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}
export enum EnumSysMenuInputDtoType {
  'System' = 'System',
  'Custom' = 'Custom',
}
