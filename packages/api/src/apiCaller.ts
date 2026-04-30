/* eslint-disable prettier/prettier */
import {
  GeneralAuthControllerService,
  GeneralCityControllerService,
  GeneralDateEventControllerService,
  GeneralJobControllerService,
  GeneralNumberInfoAddressControllerService,
  GeneralNumberInfoCommentControllerService,
  GeneralNumberInfoControllerService,
  GeneralNumberInfoRelationControllerService,
  GeneralNumberInfoTagControllerService,
  GeneralProvinceControllerService,
  GeneralSearchControllerService,
  GeneralServiceEntityControllerService,
  GeneralServiceGroupControllerService,
  GeneralServiceGroupServiceEntityControllerService,
  GeneralServiceTimeControllerService,
  GeneralTagControllerService,
  AdminCityControllerService,
  AdminDateEventControllerService,
  AdminGroupControllerService,
  AdminJobControllerService,
  AdminNumberInfoAddressControllerService,
  AdminNumberInfoCommentControllerService,
  AdminNumberInfoControllerService,
  AdminNumberInfoRelationControllerService,
  AdminNumberInfoServiceLinkControllerService,
  AdminNumberInfoTagControllerService,
  AdminOperatorControllerService,
  AdminProvinceControllerService,
  AdminServiceEntityControllerService,
  AdminServiceGroupControllerService,
  AdminServiceGroupServiceEntityControllerService,
  AdminServiceTimeControllerService,
  AdminTagControllerService,
  AdminTicketControllerService,
  AdminTicketMessageControllerService,
  AdminUserControllerService,
  AdminUserUserGroupControllerService,
  PanelNumberInfoAddressControllerService,
  PanelNumberInfoControllerService,
  PanelServiceEntityControllerService,
  PanelServiceTimeControllerService,
} from "./gateway";

 const apiCaller = {
  General: {
    Auth: {
      Login: GeneralAuthControllerService.postApiV1GeneralAuth,
      Totp: GeneralAuthControllerService.getApiV1GeneralAuthTopt,
      SendOtp: GeneralAuthControllerService.postApiV1GeneralAuthSendOtp,
    },
    City: {
      ByProvince: GeneralCityControllerService.getApiV1GeneralCityByProvince,
    },
    DateEvent: {
      Today: GeneralDateEventControllerService.getApiV1GeneralDateEventToday,
      ByDate: GeneralDateEventControllerService.getApiV1GeneralDateEventByDate,
    },
    Job: {
      ReadAll: GeneralJobControllerService.getApiV1GeneralJob,
      Paginated: GeneralJobControllerService.getApiV1GeneralJobPagination,
      Read: GeneralJobControllerService.getApiV1GeneralJob1,
      ByNumberInfo: GeneralJobControllerService.getApiV1GeneralJobByNumberInfo,
    },
    NumberInfoAddress: {
      ByNumberInfo:
        GeneralNumberInfoAddressControllerService.getApiV1GeneralNumberInfoAddressByNumberInfo,
    },
    NumberInfoComment: {
      ByService:
        GeneralNumberInfoCommentControllerService.getApiV1GeneralNumberInfoCommentByService,
      ByNumberInfo:
        GeneralNumberInfoCommentControllerService.getApiV1GeneralNumberInfoCommentByNumberInfo,
      AverageScore:
        GeneralNumberInfoCommentControllerService.getApiV1GeneralNumberInfoCommentAverageScore,
    },
    NumberInfo: {
      GetInfo: GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetInfo,
      CheckCompleted:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoCheckCompleted,
      GetTitle: GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetTitle,
      GetHasCompleted:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetHasCompleted,
      GetStatus: GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetStatus,
      GetWebsite:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetWebsite,
      GetDescription:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetDescription,
      GetPhoto: GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetPhoto,
      GetJob: GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetJob,
      GetServices:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetServices,
      GetFileReferences:
        GeneralNumberInfoControllerService.getApiV1GeneralNumberInfoGetFileReferences,
    },
    NumberInfoRelation: {
      ByNumberInfo:
        GeneralNumberInfoRelationControllerService.getApiV1GeneralNumberInfoRelationByNumberInfo,
    },
    NumberInfoTag: {
      ByNumberInfo:
        GeneralNumberInfoTagControllerService.getApiV1GeneralNumberInfoTagByNumberInfo,
      TagsByNumberInfo:
        GeneralNumberInfoTagControllerService.getApiV1GeneralNumberInfoTagTagsByNumberInfo,
      NumberInfoIdsByTag:
        GeneralNumberInfoTagControllerService.getApiV1GeneralNumberInfoTagNumberInfoIdsByTag,
    },
    Province: {
      ReadAll: GeneralProvinceControllerService.getApiV1GeneralProvince,
      WithCities: GeneralProvinceControllerService.getApiV1GeneralProvinceWithCities,
    },
    Search: {
      ByService: GeneralSearchControllerService.getApiV1GeneralSearchByService,
      ByServicePagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByServicePagination,
      ByTag: GeneralSearchControllerService.getApiV1GeneralSearchByTag,
      ByTagPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByTagPagination,
      ByJob: GeneralSearchControllerService.getApiV1GeneralSearchByJob,
      ByJobPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByJobPagination,
      ByCity: GeneralSearchControllerService.getApiV1GeneralSearchByCity,
      ByCityPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByCityPagination,
      ByProvince: GeneralSearchControllerService.getApiV1GeneralSearchByProvince,
      ByProvincePagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByProvincePagination,
      ByMinScore: GeneralSearchControllerService.getApiV1GeneralSearchByMinScore,
      ByMinScorePagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByMinScorePagination,
      ByLatLongBounds:
        GeneralSearchControllerService.getApiV1GeneralSearchByLatLongBounds,
      ByLatLongBoundsPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByLatLongBoundsPagination,
      ByLatLongDistance:
        GeneralSearchControllerService.getApiV1GeneralSearchByLatLongDistance,
      ByLatLongDistancePagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByLatLongDistancePagination,
      ByScoreOrder:
        GeneralSearchControllerService.getApiV1GeneralSearchByScoreOrder,
      ByScoreOrderPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchByScoreOrderPagination,
      Combined: GeneralSearchControllerService.getApiV1GeneralSearchCombined,
      CombinedPagination:
        GeneralSearchControllerService.getApiV1GeneralSearchCombinedPagination,
    },
    ServiceEntity: {
      ReadAll: GeneralServiceEntityControllerService.getApiV1GeneralServiceEntity,
      Paginated:
        GeneralServiceEntityControllerService.getApiV1GeneralServiceEntityPagination,
      Read: GeneralServiceEntityControllerService.getApiV1GeneralServiceEntity1,
      ByNumberInfo:
        GeneralServiceEntityControllerService.getApiV1GeneralServiceEntityByNumberInfo,
    },
    ServiceGroup: {
      ByNumberInfo:
        GeneralServiceGroupControllerService.getApiV1GeneralServiceGroupByNumberInfo,
      ByNumberInfoWithServices:
        GeneralServiceGroupControllerService.getApiV1GeneralServiceGroupByNumberInfoWithServices,
    },
    ServiceGroupServiceEntity: {
      ByServiceGroup:
        GeneralServiceGroupServiceEntityControllerService.getApiV1GeneralServiceGroupServiceEntityByServiceGroup,
      ByNumberInfo:
        GeneralServiceGroupServiceEntityControllerService.getApiV1GeneralServiceGroupServiceEntityByNumberInfo,
    },
    ServiceTime: {
      ByNumberInfo:
        GeneralServiceTimeControllerService.getApiV1GeneralServiceTimeByNumberInfo,
      TodayWorkingStatus:
        GeneralServiceTimeControllerService.getApiV1GeneralServiceTimeTodayWorkingStatus,
    },
    Tag: {
      ByNumberInfo: GeneralTagControllerService.getApiV1GeneralTagByNumberInfo,
    },
  },
  Admin: {
    City: {
      ReadAll: AdminCityControllerService.getApiV1AdminCity,
      Create: AdminCityControllerService.postApiV1AdminCity,
      Update: AdminCityControllerService.putApiV1AdminCity,
      Delete: AdminCityControllerService.deleteApiV1AdminCity,
      ForceDelete: AdminCityControllerService.deleteApiV1AdminCityForce,
      Paginated: AdminCityControllerService.getApiV1AdminCityPagination,
      Read: AdminCityControllerService.getApiV1AdminCity1,
    },
    DateEvent: {
      ReadAll: AdminDateEventControllerService.getApiV1AdminDateEvent,
      Create: AdminDateEventControllerService.postApiV1AdminDateEvent,
      Update: AdminDateEventControllerService.putApiV1AdminDateEvent,
      Paginated: AdminDateEventControllerService.getApiV1AdminDateEventPagination,
      Read: AdminDateEventControllerService.getApiV1AdminDateEvent1,
      Delete: AdminDateEventControllerService.deleteApiV1AdminDateEvent,
    },
    Group: {
      ReadAll: AdminGroupControllerService.getApiV1AdminGroup,
      Create: AdminGroupControllerService.postApiV1AdminGroup,
      Update: AdminGroupControllerService.putApiV1AdminGroup,
      Paginated: AdminGroupControllerService.getApiV1AdminGroupPagination,
      Read: AdminGroupControllerService.getApiV1AdminGroup1,
      Delete: AdminGroupControllerService.deleteApiV1AdminGroup,
      ForceDelete: AdminGroupControllerService.deleteApiV1AdminGroupForce,
    },
    Job: {
      Create: AdminJobControllerService.postApiV1AdminJob,
      Update: AdminJobControllerService.putApiV1AdminJob,
      Delete: AdminJobControllerService.deleteApiV1AdminJob,
    },
    NumberInfoAddress: {
      ReadAll: AdminNumberInfoAddressControllerService.getApiV1AdminNumberInfoAddress,
      Create: AdminNumberInfoAddressControllerService.postApiV1AdminNumberInfoAddress,
      Update: AdminNumberInfoAddressControllerService.putApiV1AdminNumberInfoAddress,
      Paginated:
        AdminNumberInfoAddressControllerService.getApiV1AdminNumberInfoAddressPagination,
      Read: AdminNumberInfoAddressControllerService.getApiV1AdminNumberInfoAddress1,
      Delete: AdminNumberInfoAddressControllerService.deleteApiV1AdminNumberInfoAddress,
    },
    NumberInfoComment: {
      ReadAll: AdminNumberInfoCommentControllerService.getApiV1AdminNumberInfoComment,
      Create: AdminNumberInfoCommentControllerService.postApiV1AdminNumberInfoComment,
      Update: AdminNumberInfoCommentControllerService.putApiV1AdminNumberInfoComment,
      Paginated:
        AdminNumberInfoCommentControllerService.getApiV1AdminNumberInfoCommentPagination,
      Read: AdminNumberInfoCommentControllerService.getApiV1AdminNumberInfoComment1,
      Delete: AdminNumberInfoCommentControllerService.deleteApiV1AdminNumberInfoComment,
    },
    NumberInfo: {
      ReadAll: AdminNumberInfoControllerService.getApiV1AdminNumberInfo,
      Create: AdminNumberInfoControllerService.postApiV1AdminNumberInfo,
      Update: AdminNumberInfoControllerService.putApiV1AdminNumberInfo,
      Paginated: AdminNumberInfoControllerService.getApiV1AdminNumberInfoPagination,
      Read: AdminNumberInfoControllerService.getApiV1AdminNumberInfo1,
      Delete: AdminNumberInfoControllerService.deleteApiV1AdminNumberInfo,
      ForceDelete: AdminNumberInfoControllerService.deleteApiV1AdminNumberInfoForce,
      RemoveFileReference:
        AdminNumberInfoControllerService.deleteApiV1AdminNumberInfoRemoveFileReference,
    },
    NumberInfoRelation: {
      ReadAll: AdminNumberInfoRelationControllerService.getApiV1AdminNumberInfoRelation,
      Create: AdminNumberInfoRelationControllerService.postApiV1AdminNumberInfoRelation,
      Update: AdminNumberInfoRelationControllerService.putApiV1AdminNumberInfoRelation,
      Paginated:
        AdminNumberInfoRelationControllerService.getApiV1AdminNumberInfoRelationPagination,
      Read: AdminNumberInfoRelationControllerService.getApiV1AdminNumberInfoRelation1,
      Delete: AdminNumberInfoRelationControllerService.deleteApiV1AdminNumberInfoRelation,
    },
    NumberInfoServiceLink: {
      ReadAll:
        AdminNumberInfoServiceLinkControllerService.getApiV1AdminNumberInfoServiceLink,
      Create:
        AdminNumberInfoServiceLinkControllerService.postApiV1AdminNumberInfoServiceLink,
      Update:
        AdminNumberInfoServiceLinkControllerService.putApiV1AdminNumberInfoServiceLink,
      Paginated:
        AdminNumberInfoServiceLinkControllerService.getApiV1AdminNumberInfoServiceLinkPagination,
      Read:
        AdminNumberInfoServiceLinkControllerService.getApiV1AdminNumberInfoServiceLink1,
      Delete:
        AdminNumberInfoServiceLinkControllerService.deleteApiV1AdminNumberInfoServiceLink,
    },
    NumberInfoTag: {
      ReadAll: AdminNumberInfoTagControllerService.getApiV1AdminNumberInfoTag,
      Create: AdminNumberInfoTagControllerService.postApiV1AdminNumberInfoTag,
      Update: AdminNumberInfoTagControllerService.putApiV1AdminNumberInfoTag,
      Paginated:
        AdminNumberInfoTagControllerService.getApiV1AdminNumberInfoTagPagination,
      Read: AdminNumberInfoTagControllerService.getApiV1AdminNumberInfoTag1,
      Delete: AdminNumberInfoTagControllerService.deleteApiV1AdminNumberInfoTag,
    },
    Operator: {
      ReadAll: AdminOperatorControllerService.getApiV1AdminOperator,
      Create: AdminOperatorControllerService.postApiV1AdminOperator,
      Update: AdminOperatorControllerService.putApiV1AdminOperator,
      Paginated: AdminOperatorControllerService.getApiV1AdminOperatorPagination,
      Read: AdminOperatorControllerService.getApiV1AdminOperator1,
      Delete: AdminOperatorControllerService.deleteApiV1AdminOperator,
    },
    Province: {
      Read: AdminProvinceControllerService.getApiV1AdminProvince,
      Paginated: AdminProvinceControllerService.getApiV1AdminProvincePagination,
      Create: AdminProvinceControllerService.postApiV1AdminProvince,
      Update: AdminProvinceControllerService.putApiV1AdminProvince,
      Delete: AdminProvinceControllerService.deleteApiV1AdminProvince,
      ForceDelete: AdminProvinceControllerService.deleteApiV1AdminProvinceForce,
    },
    ServiceEntity: {
      Create: AdminServiceEntityControllerService.postApiV1AdminServiceEntity,
      Update: AdminServiceEntityControllerService.putApiV1AdminServiceEntity,
      Delete: AdminServiceEntityControllerService.deleteApiV1AdminServiceEntity,
    },
    ServiceGroup: {
      ReadAll: AdminServiceGroupControllerService.getApiV1AdminServiceGroup,
      Create: AdminServiceGroupControllerService.postApiV1AdminServiceGroup,
      Update: AdminServiceGroupControllerService.putApiV1AdminServiceGroup,
      Paginated:
        AdminServiceGroupControllerService.getApiV1AdminServiceGroupPagination,
      Read: AdminServiceGroupControllerService.getApiV1AdminServiceGroup1,
      Delete: AdminServiceGroupControllerService.deleteApiV1AdminServiceGroup,
    },
    ServiceGroupServiceEntity: {
      ReadAll:
        AdminServiceGroupServiceEntityControllerService.getApiV1AdminServiceGroupServiceEntity,
      Create:
        AdminServiceGroupServiceEntityControllerService.postApiV1AdminServiceGroupServiceEntity,
      Update:
        AdminServiceGroupServiceEntityControllerService.putApiV1AdminServiceGroupServiceEntity,
      Paginated:
        AdminServiceGroupServiceEntityControllerService.getApiV1AdminServiceGroupServiceEntityPagination,
      Read:
        AdminServiceGroupServiceEntityControllerService.getApiV1AdminServiceGroupServiceEntity1,
      Delete:
        AdminServiceGroupServiceEntityControllerService.deleteApiV1AdminServiceGroupServiceEntity,
    },
    ServiceTime: {
      ReadAll: AdminServiceTimeControllerService.getApiV1AdminServiceTime,
      Create: AdminServiceTimeControllerService.postApiV1AdminServiceTime,
      Update: AdminServiceTimeControllerService.putApiV1AdminServiceTime,
      Paginated: AdminServiceTimeControllerService.getApiV1AdminServiceTimePagination,
      Read: AdminServiceTimeControllerService.getApiV1AdminServiceTime1,
      Delete: AdminServiceTimeControllerService.deleteApiV1AdminServiceTime,
    },
    Tag: {
      ReadAll: AdminTagControllerService.getApiV1AdminTag,
      Create: AdminTagControllerService.postApiV1AdminTag,
      Update: AdminTagControllerService.putApiV1AdminTag,
      Paginated: AdminTagControllerService.getApiV1AdminTagPagination,
      Read: AdminTagControllerService.getApiV1AdminTag1,
      Delete: AdminTagControllerService.deleteApiV1AdminTag,
    },
    Ticket: {
      ReadAll: AdminTicketControllerService.getApiV1AdminTicket,
      Create: AdminTicketControllerService.postApiV1AdminTicket,
      Update: AdminTicketControllerService.putApiV1AdminTicket,
      Paginated: AdminTicketControllerService.getApiV1AdminTicketPagination,
      Read: AdminTicketControllerService.getApiV1AdminTicket1,
      Delete: AdminTicketControllerService.deleteApiV1AdminTicket,
    },
    TicketMessage: {
      ReadAll: AdminTicketMessageControllerService.getApiV1AdminTicketMessage,
      Create: AdminTicketMessageControllerService.postApiV1AdminTicketMessage,
      Paginated:
        AdminTicketMessageControllerService.getApiV1AdminTicketMessagePagination,
      ByTicket:
        AdminTicketMessageControllerService.getApiV1AdminTicketMessageByTicket,
      Read: AdminTicketMessageControllerService.getApiV1AdminTicketMessage1,
      Delete: AdminTicketMessageControllerService.deleteApiV1AdminTicketMessage,
    },
    User: {
      ReadAll: AdminUserControllerService.getApiV1AdminUser,
      Create: AdminUserControllerService.postApiV1AdminUser,
      Update: AdminUserControllerService.putApiV1AdminUser,
      Paginated: AdminUserControllerService.getApiV1AdminUserPagination,
      Read: AdminUserControllerService.getApiV1AdminUser1,
      Delete: AdminUserControllerService.deleteApiV1AdminUser,
      ForceDelete: AdminUserControllerService.deleteApiV1AdminUserForce,
    },
    UserUserGroup: {
      ReadAll: AdminUserUserGroupControllerService.getApiV1AdminUserUserGroup,
      Create: AdminUserUserGroupControllerService.postApiV1AdminUserUserGroup,
      Update: AdminUserUserGroupControllerService.putApiV1AdminUserUserGroup,
      Paginated:
        AdminUserUserGroupControllerService.getApiV1AdminUserUserGroupPagination,
      ByUser: AdminUserUserGroupControllerService.getApiV1AdminUserUserGroupByUser,
      ByGroup: AdminUserUserGroupControllerService.getApiV1AdminUserUserGroupByGroup,
      GroupIdsByUser:
        AdminUserUserGroupControllerService.getApiV1AdminUserUserGroupGroupIdsByUser,
      UserIdsByGroup:
        AdminUserUserGroupControllerService.getApiV1AdminUserUserGroupUserIdsByGroup,
      Read: AdminUserUserGroupControllerService.getApiV1AdminUserUserGroup1,
      Delete: AdminUserUserGroupControllerService.deleteApiV1AdminUserUserGroup,
      SetUserGroups:
        AdminUserUserGroupControllerService.putApiV1AdminUserUserGroupSetUserGroups,
      SetGroupUsers:
        AdminUserUserGroupControllerService.putApiV1AdminUserUserGroupSetGroupUsers,
    },
  },
  Panel: {
    NumberInfo: {
      Read: PanelNumberInfoControllerService.getApiV1PanelNumberInfo,
      GetTitle: PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetTitle,
      UpdateTitle:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateTitle,
      GetHasCompleted:
        PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetHasCompleted,
      ToggleHasCompleted:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoToggleHasCompleted,
      GetStatus: PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetStatus,
      UpdateStatus:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateStatus,
      GetWebsite: PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetWebsite,
      UpdateWebsite:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateWebsite,
      GetDescription:
        PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetDescription,
      UpdateDescription:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateDescription,
      GetPhoto: PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetPhoto,
      UpdatePhoto:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdatePhoto,
      GetJob: PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetJob,
      UpdateJobId:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateJobId,
      GetServices:
        PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetServices,
      UpdateServices:
        PanelNumberInfoControllerService.putApiV1PanelNumberInfoUpdateServices,
      GetFileReferences:
        PanelNumberInfoControllerService.getApiV1PanelNumberInfoGetFileReferences,
      AddFileReferences:
        PanelNumberInfoControllerService.postApiV1PanelNumberInfoAddFileReferences,
      RemoveFileReference:
        PanelNumberInfoControllerService.deleteApiV1PanelNumberInfoRemoveFileReference,
    },
    NumberInfoAddress: {
      Read: PanelNumberInfoAddressControllerService.getApiV1PanelNumberInfoAddress,
      Update:
        PanelNumberInfoAddressControllerService.putApiV1PanelNumberInfoAddress,
    },
    ServiceEntity: {
      TopUsedByCurrentJob:
        PanelServiceEntityControllerService.getApiV1PanelServiceEntityTopUsedByCurrentJob,
    },
    ServiceTime: {
      ReadAll: PanelServiceTimeControllerService.getApiV1PanelServiceTime,
      Update: PanelServiceTimeControllerService.putApiV1PanelServiceTime,
    },
  },
};

export default apiCaller;
