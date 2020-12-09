export interface AccountCompanySubscribeCreateRq {
  companySn: number
}

export interface AccountCompanySubscribeDeleteRq {
  companySn?: number
}

export interface AccountFitJobPostDto {
  hasJobFitGrade?: boolean
  hasPreferenceFitGrade?: boolean
  jobFitEduScore?: number
  jobFitLanguageExamScore?: number
  jobFitLicenseScore?: number
  jobFitMajorScore?: number
  jobPost?: JobPostDto
  prefFitCompanyConditionScore?: number
  prefFitCompanyCultureScore?: number
  prefFitTotalScore?: number
  prefFitWorkStyleScore?: number
  prefFitWorkTypeScore?: number
}

export interface AccountFitJobPostListRs {
  accountFitJobPostDtoList?: AccountFitJobPostDto[]
}

export interface AccountFitToDoRs {
  hasFitUpResultYn?: boolean
  hasGeneralExamResult?: boolean
  hasProfileYn?: boolean
  isHuntingJobs?: boolean
}

export interface AccountHuntingJobsRs {
  huntingJobsStartDateTime?: string
  huntingJobsYn?: boolean
}

export interface AccountNotificationTypeDto {
  code?: string
  notificationTypeSn?: number
  useYn?: boolean
}

export interface AccountNotificationTypeListRs {
  notificationList?: AccountNotificationTypeDto[]
}

export interface AccountNotificationTypeSaveRq {
  code: string
  useYn: boolean
}

export interface AccountSaveJobRq {
  jobSn: number
  recommendUsername?: string
}

export interface AccountSaveRefererRq {
  username?: string
}

export interface AccountSubscribesRs {
  receiveMarketingInformationYn?: boolean
  subscribes?: CompanySubscribeDto[]
}

export interface AccountTypeRs {
  accountType?: string
}

export interface AccountVerificationDto {
  createdDateTime?: string
  lastModifiedDateTime?: string
  verificationType?: "SMS" | "IPIN" | "EMAIL"
}

export interface AgreementItemDto {
  agreementItemContents: string
  agreementItemName: string
  agreementItemSn: number
  agreementItemType: string
  agreementLetterSn: number
  sortOrder: number
}

export interface AiFaqCategoryDto {
  aiFaqCategorySn?: number
  categoryName?: string
}

export interface AiFaqCategoryListRs {
  categories?: AiFaqCategoryDto[]
}

export interface AiFaqKeywordListRs {
  keywords?: string[]
}

export interface AiFaqListRq {
  aiFaqCategorySn?: number
  currentPage: number
  keyword?: string
  pageSize: number
}

export interface AiFaqListRs {}

export interface ApplicationContext {
  applicationName?: string
  autowireCapableBeanFactory?: AutowireCapableBeanFactory
  beanDefinitionCount?: number
  beanDefinitionNames?: string[]
  classLoader?: ClassLoader
  displayName?: string
  environment?: Environment
  id?: string
  parent?: ApplicationContext
  parentBeanFactory?: BeanFactory
  startupDate?: number
}

export interface ApplyStatusDto {
  applyAgreementLetterYn?: boolean
  applyDomainUrl?: string
  companyLogoImage?: FileDto
  companyName?: string
  companySn?: number
  generalExamSubmitYn?: boolean
  jobPostName?: string
  jobPostSn?: number
  jobPostType?: string
  notificationYn?: boolean
  postEndDateTime?: string
  resumeSn?: number
  submissionClosingDateTime?: string
  submitDateTime?: string
  submitYn?: boolean
}

export interface ApplyStatusListRq {
  blockSize?: number
  currentPage: number
  pageSize: number
  searchText?: string
  submitYn?: boolean
}

export interface ApplyStatusListRs {
  applyStatusDtoList?: ApplyStatusDto[]
  pageUtil?: PageUtil
}

export interface ApplyStatusProgressCountRq {
  imminentYn?: boolean
  submitYn?: boolean
}

export interface ApplyStatusProgressCountRs {
  listCount?: number
}

export interface ApplyStatusSaveAgreementRq {
  jobflexResumeSn?: number
}

export interface ApplyStatusValidationJobPostRq {
  jobPostSn?: number
}

export interface AutowireCapableBeanFactory {}

export interface BannerListItemDto {
  bannerSn: number
  link: string
  mobileImage: FileDto
  openStatus: "CLOSED" | "OPEN"
  pcBackgroundImage: FileDto
  pcImage: FileDto
  title: string
}

export interface BannerListRs {
  banners?: BannerListItemDto[]
}

export interface BeanFactory {}

export interface CalibrationCheckRs {
  analysisCompleteYn?: boolean
  videoErrorMessage?: string
  videoSuccessYn?: boolean
  voiceASRAccuracy?: number
  voiceErrorMessage?: string
  voiceSuccessYn?: boolean
}

export interface CategoryPostsDto {
  categoryName?: string
  categoryType?: string
  posts?: PostDto[]
}

export interface ChangePasswordRq {
  currentPassword: string
  newPassword: string
}

export interface CheckMobileAuthRq {
  mobile?: string
  secretKey?: string
  username?: string
}

export interface CheckMobileAuthRs {
  successYn?: boolean
}

export interface CheckPersonalInfoCollectionRs {
  successYn: boolean
}

export interface CheckResumeRs {
  result: "NOT_AGREE" | "RE_AGREE" | "WRITING" | "SUBMITTED"
  resumeSn?: number
}

export interface ClassLoader {
  parent?: ClassLoader
}

export interface CollegeMajorVO {
  limitSize?: number
  majorCode?: string
  majorName?: string
}

export interface CollegeVO {
  collegeCode?: string
  collegeName?: string
  limitSize?: number
}

export interface CommonDetailQuestionDto {
  contents?: string
  readyTime?: number
  replyTime?: number
  resolveYn?: boolean
  v3QnaCommonSn?: number
}

export interface CommonListRs {
  list?: {}[]
}

export interface CommonQuestionDto {
  jobGroupCode?: string
  limitTime?: number
  partNumber?: number
  questionList?: CommonDetailQuestionDto[]
  questionSn?: number
  resolveYn?: boolean
  useYn?: boolean
  v3JobQnaCommonSn?: number
  v3QnaCommonSn?: number
}

export interface CompanyBannerItemDto {
  companyName?: string
  companyOpenStatus?: "CLOSED" | "OPEN" | "SOON_OPEN"
  companySn?: number
  exposureName?: string
  logoImageUid?: FileDto
}

export interface CompanyBannerRs {
  companies?: CompanyBannerItemDto[]
}

export interface CompanyBasicInfoDto {
  address?: string
  businessSize?: string
  businessTypeName?: string
  ceoName?: string
  foundedDate?: string
  homePageUrl?: string
  numberOfEmployees?: number
  products?: string
  zipCode?: string
}

export interface CompanyBrandChannelClosingJobPostDto {
  companyIntroduction?: string
  companyLogo?: string
  companyName?: string
  companySn?: number
  notificationYn?: boolean
  recruitingJobPostCount?: number
}

export interface CompanyBrandChannelEventRq {
  companySn: number
}

export interface CompanyBrandChannelEventRs {
  eventList?: CompanyEventDto[]
}

export interface CompanyBrandChannelOnAirRq {
  companySn: number
}

export interface CompanyBrandChannelOnAirRs {
  onAirList?: CompanyOnAirDto[]
}

export interface CompanyBrandChannelPostRq {
  companySn: number
}

export interface CompanyBrandChannelPostRs {
  categories?: CategoryPostsDto[]
}

export interface CompanyBrandChannelRq {
  companySn: number
}

export interface CompanyBrandChannelRs {
  mainContentsSubTitle?: string
  mainContentsThumbnail?: FileDto
  mainContentsTitle?: string
  mainContentsUrl?: string
}

export interface CompanyChannelBannerImageRs {
  imageList?: BannerListItemDto[]
}

export interface CompanyChannelClosingJobPostCompanyListRq {
  blockSize?: number
  currentPage: number
  pageSize: number
}

export interface CompanyChannelClosingJobPostCompanyListRs {
  closingJobPostList?: CompanyBrandChannelClosingJobPostDto[]
  pageUtil?: PageUtil
}

export interface CompanyChannelCompanyDto {
  companyLogo?: string
  companyName?: string
  companySn?: number
  notificationYn?: boolean
  recruitingJobPostCount?: number
}

export interface CompanyChannelOnAirDto {
  companyIntroduction?: string
  companyLogo?: string
  companyName?: string
  companySn?: number
  mobileThumbnailUid?: string
  notificationYn?: boolean
  onAirSn?: number
  thumbnailUid?: string
  timeTitle?: string
}

export interface CompanyChannelOnAirListRq {
  blockSize?: number
  currentPage: number
  pageSize: number
}

export interface CompanyChannelOnAirListRs {
  onAirList?: CompanyChannelOnAirDto[]
  pageUtil?: PageUtil
}

export interface CompanyChannelPopularCompanyDto {
  companyLogo?: string
  companyName?: string
  companySn?: number
  notificationYn?: boolean
  recruitingJobPostCount?: number
}

export interface CompanyChannelPopularCompanyListRs {
  popularCompanyList?: CompanyChannelPopularCompanyDto[]
}

export interface CompanyChannelRs {
  bannerImage?: FileDto
  categories?: CategoryPostsDto[]
  companyName?: string
  exposureName?: string
  logoImage?: FileDto
  mainContentsSubTitle?: string
  mainContentsThumbnail?: FileDto
  mainContentsTitle?: string
  mainContentsUrl?: string
  recruitSiteUrl?: string
}

export interface CompanyChannelSearchRq {
  blockSize?: number
  currentPage: number
  pageSize: number
  searchText?: string
}

export interface CompanyChannelSearchRs {
  companyList?: CompanyChannelCompanyDto[]
  pageUtil?: PageUtil
}

export interface CompanyCommonInfoRq {
  companySn: number
}

export interface CompanyCommonInfoRs {
  bannerImage?: FileDto
  businessTypeName?: string
  companyName?: string
  homePageUrl?: string
  logoImage?: FileDto
  mobileBannerImage?: FileDto
  recruitSiteUrl?: string
}

export interface CompanyDto {
  companySn?: number
  logoImage?: FileDto
  name?: string
}

export interface CompanyEmploymentMonthlyStatusDto {
  numberOfEmployment?: number
  numberOfRetirement?: number
  recordDate?: string
}

export interface CompanyEmploymentStatusDto {
  employmentRatePerYear?: number
  monthlyStatusList?: CompanyEmploymentMonthlyStatusDto[]
  recordDate?: string
  retirementRatePerYear?: number
}

export interface CompanyEventDto {
  companySn?: number
  endDateTime?: string
  eventSn?: number
  mobileThumbnailUid?: string
  startDateTime?: string
  subTitle?: string
  thumbnailUid?: string
  title?: string
}

export interface CompanyEventInfoRs {
  applyFinishButtonName?: string
  applyFinishUrl?: string
  endDateTime?: string
  eventSn?: number
  hasPrivacyPolicies?: boolean
  mobileApplyFinishImage?: FileDto
  mobileApplyImage?: FileDto
  mobileApplyMainBackgroundImage?: FileDto
  mobileContents?: string
  mobileMainImage?: FileDto
  mobileSnsBackgroundImage?: FileDto
  mobileThumbnailImage?: FileDto
  openYn?: boolean
  pcApplyFinishImage?: FileDto
  pcApplyImage?: FileDto
  pcApplyMainBackgroundImage?: FileDto
  pcContents?: string
  pcMainImage?: FileDto
  pcSnsBackgroundImage?: FileDto
  pcThumbnailImage?: FileDto
  questions?: CompanyEventQuestionDto[]
  startDateTime?: string
  subTitle?: string
  title?: string
  videoCode?: string
  videoViewYn?: boolean
}

export interface CompanyEventQuestionAnswerDto {
  answer?: string
  answerSn?: number
}

export interface CompanyEventQuestionDto {
  answers?: CompanyEventQuestionAnswerDto[]
  question?: string
}

export interface CompanyInfoRq {
  companySn: number
}

export interface CompanyInfoRs {
  affiliateList?: CompanyDto[]
  companyBasicInfo?: CompanyBasicInfoDto
  companySalary?: CompanySalaryDto
  employmentStatus?: CompanyEmploymentStatusDto
  relatedCompanyList?: CompanyDto[]
}

export interface CompanyInsightJobPostDto {
  jobPostType?: "BASIC" | "AI_INTERVIEW_G"
  jobPosts?: CompanyJobPostListDto[]
  postEndDateTime?: string
  postStartDateTime?: string
  recruitNoticeName?: string
  recruitNoticeSn?: number
}

export interface CompanyJobPostDetailRq {
  companySn: number
  jobPostSn: number
}

export interface CompanyJobPostDetailRs {
  ageLimit?: string
  attachFiles?: FileDto[]
  birthDate?: string
  contents?: string
  description?: string
  gender?: string
  isInsightJobPost?: boolean
  jobExperienceType?: string
  jobGroupName?: string
  jobName?: string
  jobPostName?: string
  jobPostType?: "BASIC" | "AI_INTERVIEW_G"
  jobPostingUrl?: string
  jobType?: string
  locationList?: string[]
  minimumQualification?: QualificationDto
  postEndDateTime?: string
  postStartDateTime?: string
  preferredQualification?: QualificationDto
  recruitmentLimit?: string
  salary?: string
  screeningProcessList?: ScreeningProcessDto[]
  startJoiningDate?: string
  workingTimeType?: string
}

export interface CompanyJobPostListDto {
  jobName?: string
  jobPostName?: string
  jobPostSn?: number
}

export interface CompanyJobPostListRq {
  companySn: number
  recruitClassCodeName?: string
}

export interface CompanyJobPostListRs {
  insightJobPosts?: CompanyInsightJobPostDto[]
}

export interface CompanyOnAirDto {
  companySn?: number
  endDateTime?: string
  mobileThumbnailUid?: string
  onAirSn?: number
  startDateTime?: string
  subTitle?: string
  thumbnailUid?: string
  title?: string
}

export interface CompanyPostDto {
  companyName?: string
  companySn?: number
  exposureName?: string
  logoImage?: FileDto
  posts?: PostDto[]
}

export interface CompanyRecentlyPostRs {
  posts?: PostDto[]
}

export interface CompanyRecruitClassCodeListRq {
  companySn: number
}

export interface CompanyRecruitClassCodeListRs {
  recruitClassCodeList?: RecruitClassCodeDto[]
}

export interface CompanySalaryDto {
  averageSalary?: number
  averageStartingSalary?: number
  businessAverageSalary?: number
  recordDate?: string
}

export interface CompanySubscribeDto {
  companyLogo?: string
  companyName?: string
  companySn?: number
}

export interface CopyResumeRq {
  resumeItemSnList: ResumeItemSnDto[]
  sourceResumeSn: number
  targetResumeSn: number
}

export interface EncryptedQuestionRs {
  pv?: string
}

export interface Environment {
  activeProfiles?: string[]
  defaultProfiles?: string[]
}

export interface EventApplyRq {
  eventSn?: number
  questionAnswers?: number[]
}

export interface EventGetApplyYnRq {
  eventSn?: number
}

export interface EventGetApplyYnRs {
  applyYn?: boolean
}

export interface EventPrivacyPolicyRq {
  eventSn: number
}

export interface EventPrivacyPolicyRs {
  companyEventPrivacyPolicySn?: number
  contents?: string
}

export interface ExamCompositionDto {
  examCompositionKindCode?: string
  examCompositionSn?: number
  examSteps?: ExamStepDto[]
  limitTime?: number
  partCount?: number
  progressStatus?: string
  sessionDivisionCode?: string
}

export interface ExamFileDto {
  fileName: string
  fileSize: number
  fileUid: string
}

export interface ExamJobPostInfoDto {
  companyLogo?: ExamFileDto
  companyName?: string
  generalExamClosingDateTime?: string
  generalExamSubmitDateTime?: string
  generalExamSubmitYn?: boolean
  jobPostSn?: number
  jobPostTitle?: string
  jobflexResumeSn?: number
  resumeSubmitDateTime?: string
  resumeSubmitYn?: boolean
  submissionClosingDateTime?: string
}

export interface ExamStepDto {
  examStepName?: string
  partNumber?: number
  progressStatus?: string
  requiredTime?: number
  takeStepCode?: string
}

export interface ExternalExamDto {
  contents?: string
  externalExamUrl: string
  imageUrl?: string
  positionX: number
  positionY: number
  sizeX: number
  sizeY: number
  testIdx: number
}

export interface ExternalExamResumeDto {
  applicantViewNo: string
  email: string
  name: string
}

export interface ExternalExamRq {
  resumeSn?: number
}

export interface ExternalExamRs {
  externalExam?: ExternalExamDto
  resumeInfo?: ExternalExamResumeDto
}

export interface FileDto {
  fileName: string
  fileSize: number
  fileUid: string
}

export interface FitExamAnswerDto {
  sn: number
  title: string
}

export interface FitExamGroupDto {
  description: string
  examCount: number
  fitExamQuestionType: "IPSATIVE" | "BIPOLAR" | "NEGO" | "LIKERT" | "AB_CHOICE"
  questionInfo: string
  sn: number
  subTitle: string
  title: string
  userExamCount: number
}

export interface FitExamGroupListRs {
  fitExamGroups: FitExamGroupDto[]
}

export interface FitExamQuestionDto {
  fitExamAnswers: FitExamAnswerDto[]
  sn: number
  title1: string
  title2: string
}

export interface FitExamQuestionListRs {
  fitExamQuestions: FitExamQuestionDto[]
}

export interface FitJobSearchAnswerDto {
  sn: number
  title: string
}

export interface FitJobSearchQuestionDto {
  fitJobSearchAnswers: FitJobSearchAnswerDto[]
  sn: number
  title: string
}

export interface FitJobSearchQuestionListRs {
  fitJobSearchQuestions: FitJobSearchQuestionDto[]
}

export interface FitUserExamDto {
  fitExamAnswerSn: number
  reactionTime?: number
  value?: number
}

export interface FitUserExamListRs {
  fitUserExams: FitUserExamDto[]
}

export interface FitUserExamRq {
  fitUserExams?: FitUserExamDto[]
}

export interface FitUserJobSearchDto {
  fitJobSearchAnswerSn: number
  reactionTime?: number
}

export interface FitUserJobSearchListRs {
  fitUserJobSearches: FitUserJobSearchDto[]
}

export interface FitUserJobSearchRq {
  fitUserJobSearches?: FitUserJobSearchDto[]
}

export interface FitUserResultDto {
  companyConditionComparison?: string
  companyConditionOrdering?: string
  companyCultureChart?: string
  companyCultureDesc?: string
  companyCultureKeyword?: string
  factor?: string
  fitUserStatusDesc?: string
  fitUserStatusType?: "SEARCH" | "UNDERSTAND" | "MATURATION"
  income?: number
  incomeDesc?: string
  incomeMax?: number
  incomeMin?: number
  lastModifiedDateTime?: string
  recommendedJob?: string
  recommendedJobMain?: string
  sn: number
  tip?: string
  workPositionChart?: string
  workPositionDesc?: string
  workPositionGuide?: string
  workPositionKeyword?: string
  workStyle?: string
  workStyleDesc?: string
  workStyleKeyword?: string
}

export interface FitUserResultShareDto {
  recommendedJob?: string
  recommendedJobMain?: string
}

export interface ForeignExamGradeVO {
  foreignExamCode?: string
  gradeCode?: string
  gradeName?: string
  isUse?: boolean
  priority?: number
}

export interface ForeignExamWithSetupVO {
  foreignExamCode?: string
  foreignExamName?: string
  gradeFlag?: boolean
  perfactGrade?: string
  priority?: string
  scoreFlag?: boolean
  setupCode?: string
  setupValue?: string
}

export interface GeneralExamJobPostInfoRs {
  examJobPostInfoList?: ExamJobPostInfoDto[]
}

export interface GeneralExamLoadAgreementDto {
  companyName?: string
  resumeRetentionPeriod?: string
}

export interface GeneralExamLoadAgreementRq {
  jobPostSnList?: number[]
}

export interface GeneralExamLoadAgreementRs {
  agreementList?: GeneralExamLoadAgreementDto[]
}

export interface GetCompleteGuideRq {
  jobPostSn: number
  resumeSn: number
}

export interface GetCompleteGuideRs {
  completeGuide?: string
  generalExamClosingDateTime?: string
  generalExamSubmitDateTime?: string
  generalExamSubmitYn?: boolean
  jobPostName: string
  jobPostType: "BASIC" | "AI_INTERVIEW_G"
  logoFileUid: string
  submitDatetime?: string
  submitYn?: boolean
}

export interface GetExamineeInfoRs {
  examineeStatusCode?: string
  name?: string
}

export interface GetGamesRs {
  list?: ExamCompositionDto[]
  v3List?: ExamCompositionDto[]
}

export interface GetInterviewInfoRs {
  interviewStatus?: string
  isReliable?: boolean
  testEndDateTime?: string
}

export interface GetJobPostInfoRq {
  recruitNoticeSn: number
}

export interface GetJobPostInfoRs {
  jobPostSectors: JobPostSectorDto[]
  logoFileUid: string
  recruitNoticeName: string
}

export interface GetLikertInfoRs {
  likertDistractorList?: LikertDistractorDto[]
  stepList?: ExamStepDto[]
  surveyCountList?: LikertCountDto[]
}

export interface GetLikertQuestionsRs {
  questionList?: LikertQuestionDto[]
}

export interface GetQuestionsRs_CommonQuestionDto_ {
  questionList?: CommonQuestionDto[]
  stepList?: ExamStepDto[]
}

export interface GetQuestionsRs_SituationQuestionDto_ {
  questionList?: SituationQuestionDto[]
  stepList?: ExamStepDto[]
}

export interface GetQuestionsRs_string_ {
  questionList?: string[]
  stepList?: ExamStepDto[]
}

export interface GuidanceApplyInfoRq {
  jobflexResumeSn?: number
}

export interface GuidanceApplyInfoRs {
  interviewGInfo?: GuidanceDetailInterviewGDto
  jobPostInfo?: GuidanceDetailJobPostDto
  resumeInfo?: GuidanceDetailResumeDto
}

export interface GuidanceAttachFileDto {
  fileName?: string
  fileUid?: string
}

export interface GuidanceConfirmAttendanceRq {
  jobFlexResumeSn?: number
  screeningSn?: number
}

export interface GuidanceConfirmAttendanceRs {
  confirmAttendanceContents?: string
}

export interface GuidanceDetailInterviewGDto {
  jobflexResumeSn?: number
  submitDatetime?: string
  submitYn?: boolean
}

export interface GuidanceDetailJobPostDto {
  companyLogoImage?: FileDto
  companyName?: string
  companySn?: number
  interviewGClosingDateTime?: string
  jobPostSn?: number
  jobPostType?: "BASIC" | "AI_INTERVIEW_G"
  postEndDatetime?: string
  recruitNoticeName?: string
  submissionClosingDateTime?: string
}

export interface GuidanceDetailResumeDto {
  applyDatetime?: string
  jobflexResumeSn?: number
  recruitSectorNameList?: string[]
  submitDatetime?: string
  submitYn?: boolean
}

export interface GuidanceDetailRq {
  guidanceMethodSn?: number
  jobPostSn?: number
  screeningResumeSn?: number
}

export interface GuidanceDetailRs {
  myPage?: GuidanceForMyPageDto
}

export interface GuidanceExamineeDto {
  examClosingDatetime?: string
  examInfo?: string
  examSn?: number
  examStartDatetime?: string
  examineeAddress?: string
  examineeSn?: number
  examineeStatusCode?: string
  resultOpenAllowYn?: boolean
  resultOpenClosingDatetime?: string
  resultOpenStartDatetime?: string
  screeningSn?: number
  title?: string
  videoInterviewYn?: boolean
}

export interface GuidanceFileDownloadRq {
  fileUid?: string
}

export interface GuidanceFileUploadRs {
  responseMessage?: string
}

export interface GuidanceForMyPageDto {
  attachFileList?: GuidanceAttachFileDto[]
  attendanceIntentionYn?: boolean
  canOpen?: boolean
  contents?: string
  finalPasserGuidanceYn?: boolean
  guidanceAttendanceReplyYn?: boolean
  guidanceMethodSn?: number
  guidanceNextAttendanceReplyYn?: boolean
  guidanceSn?: number
  guidanceTargetSn?: number
  guidanceTargetType?: string
  guidanceType?: string
  nextAttendanceReplyYn?: boolean
  postClosingDatetime?: string
  postStartDatetime?: string
  resumeSn?: number
  screeningRecruitNoticeSn?: number
  screeningResultCode?: string
  screeningResumeSn?: number
  screeningSn?: number
  screeningType?: string
  submissionClosingDatetime?: string
  submissionStartDatetime?: string
  submissionTypeCode?: string
  submissionYn?: boolean
  title?: string
  uploadFile?: GuidanceAttachFileDto
}

export interface GuidanceListRq {
  filterCode?: "ALL" | "진행중" | "마감"
  jobFlexResumeSn?: number
}

export interface GuidanceListRs {
  announcementList?: GuidanceForMyPageDto[]
  examPaperList?: GuidanceForMyPageDto[]
  examineeGuidanceList?: GuidanceExamineeDto[]
  joinPaperList?: GuidanceForMyPageDto[]
  screeningGuidanceList?: GuidanceForMyPageDto[]
}

export interface HighSchoolVO {
  highschoolCode?: string
  highschoolName?: string
  limitSize?: number
}

export interface InterviewPracticeEnvironmentCheckEndRq {
  endDateTime: string
  interviewPracticeSn: number
  result: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
}

export interface InterviewPracticeEnvironmentCheckStartRq {
  startDateTime: string
}

export interface InterviewPracticeEnvironmentCheckStartRs {
  interviewPracticeSn: number
}

export interface InterviewPracticeLikertEndRq {
  earlyTimeoutCount: number
  endDateTime: string
  interviewPracticeSn: number
  lateTimeoutCount: number
  likertType1:
    | "HONESTY_A"
    | "HONESTY_B"
    | "EXTROVERSION_A"
    | "EXTROVERSION_B"
    | "AFFINITY_A"
    | "AFFINITY_B"
    | "DILIGENCE_A"
    | "DILIGENCE_B"
    | "OPENNESS_A"
    | "OPENNESS_B"
  likertType2:
    | "HONESTY_A"
    | "HONESTY_B"
    | "EXTROVERSION_A"
    | "EXTROVERSION_B"
    | "AFFINITY_A"
    | "AFFINITY_B"
    | "DILIGENCE_A"
    | "DILIGENCE_B"
    | "OPENNESS_A"
    | "OPENNESS_B"
  noAnswerCount: number
  result: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
}

export interface InterviewPracticeLikertStartRq {
  setNum: "SET1" | "SET2" | "SET3" | "DEFAULT" | "CUSTOM"
  startDateTime: string
}

export interface InterviewPracticeLikertStartRs {
  interviewPracticeSn: number
}

export interface InterviewPracticeResultDto {
  environmentCheckResult?: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  likertResult?: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  strategyGameResult?: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  videoInterviewResult?: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
}

export interface InterviewPracticeResultRs {
  interviewPracticeResult?: InterviewPracticeResultDto
}

export interface InterviewPracticeStrategyGameDto {
  interviewPracticeSn: number
  result?: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  subModule?: "ERT_P2_2" | "FWT2" | "TOLT" | "SST" | "PCT" | "NBACK" | "STROOP2" | "CCT"
}

export interface InterviewPracticeStrategyGameEndRq {
  endDateTime: string
  interviewPracticeSn: number
  methodResult: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  result: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
  targetResult: "PASS" | "FAIL" | "CHEER_UP" | "GOOD" | "PERFECT" | "READY" | "ING"
}

export interface InterviewPracticeStrategyGameResultRs {
  strategyGameResults?: InterviewPracticeStrategyGameDto[]
}

export interface InterviewPracticeStrategyGameStartRq {
  restartYn: boolean
  setNum: "SET1" | "SET2" | "SET3" | "DEFAULT" | "CUSTOM"
  startDateTime: string
  subModule: "ERT_P2_2" | "FWT2" | "TOLT" | "SST" | "PCT" | "NBACK" | "STROOP2" | "CCT"
}

export interface InterviewPracticeStrategyGameStartRs {
  interviewPracticeSn: number
}

export interface InterviewPracticeVideoInterviewEndRq {
  endDateTime: string
  interviewPracticeSn: number
  questionList?: string[]
  restartQuestion?: string
  setNum?: "SET1" | "SET2" | "SET3" | "DEFAULT" | "CUSTOM"
  videoCount?: number
}

export interface InterviewPracticeVideoInterviewStartRq {
  startDateTime: string
}

export interface InterviewPracticeVideoInterviewStartRs {
  interviewPracticeSn: number
}

export interface JobGroupListRs {
  jobGroups: SystemJobGroupDto[]
}

export interface JobListRq {
  jobGroupSn: number
}

export interface JobListRs {
  jobs?: SystemJobDto[]
}

export interface JobPostDto {
  companyName?: string
  companySn?: number
  deleteYn?: boolean
  generalExamClosingDateTime?: string
  jobGroupName?: string
  jobName?: string
  jobPostName?: string
  jobPostSn?: number
  jobPostType?: "BASIC" | "AI_INTERVIEW_G"
  logoFileUid?: string
  openYn?: boolean
  postEndDateTime?: string
  postStartDateTime?: string
  recruitSectorName?: string
  submissionClosingDateTime?: string
}

export interface JobPostSectorDto {
  jobPostSn: number
  postEndDateTime: string
  postStartDateTime: string
  recruitSectorName: string
}

export interface LicenseVO {
  licenseCode?: string
  licenseName?: string
  limitSize?: number
  useRegistNumber?: boolean
  useScore?: boolean
}

export interface LikertAnswerDto {
  answer?: string
  preinquireSn?: number
  questionSn?: number
  resolveTime?: number
  timeoutYn?: boolean
}

export interface LikertCountDto {
  count?: number
  displayPriority?: number
  surveyTypeCode?: string
}

export interface LikertDistractorDto {
  contents?: string
  point?: number
}

export interface LikertQuestionDto {
  contents?: string
  displayPriority?: number
  limitTime?: number
  partNumber?: number
  preinquireSn?: number
  questionSn?: number
  selectPossibleCount?: number
  surveyTypeCode?: string
}

export interface LoadResumeItemsRq {
  resumeSn: number
}

export interface LoadResumeItemsRs {
  resumeItems: SimpleResumeItemDto[]
}

export interface LoadResumeRq {
  jobPostSn: number
  resumeSn: number
}

export interface LoadSubmitOathRs {
  resumeSubmitOath?: AgreementItemDto
}

export interface LocationDto {
  name: string
  sn: number
}

export interface MajorGroupSimpleDto {
  level: "SECTION" | "DIVISION" | "GROUP" | "CLASS"
  name: string
  sn: number
}

export interface MajorRq {
  name?: string
}

export interface MeRs {
  mobile?: string
  name?: string
  profileImageUid?: string
  profileImageUrl?: string
  username?: string
}

export interface NbackAnswerDto {
  answer?: string
  detailList?: NbackDetailAnswerDto[]
  questionSn?: number
  resolveTime?: number
  timeoutYn?: boolean
}

export interface NbackDetailAnswerDto {
  answerIndex?: number
  answerTime?: number
  input?: string
  result?: string
}

export interface NotificationDeleteRq {
  notificationSnList?: number[]
}

export interface NotificationListRs {
  notificationTypes?: NotificationTypeDto[]
}

export interface NotificationRestListRq {
  blockSize?: number
  currentPage: number
  pageSize: number
}

export interface NotificationRestListRs {
  newNotificationCount?: number
  pageUtil?: PageUtil
  screeningAnnouncementList?: ScreeningAnnouncementNotificationDto[]
}

export interface NotificationTypeDto {
  code?: string
  name?: string
  notificationTypeSn?: number
}

export interface NotificationUpdateAccessTimeRq {
  notificationSnList?: number[]
}

export interface OnAirDetailsRs {
  companyLogo?: string
  companyName?: string
  companySn?: number
  description?: string
  endDateTime?: string
  eventUrl?: string
  eventYn?: boolean
  keyword?: string
  mobileThumbnailUid?: string
  openYn?: boolean
  qnaTalkYn?: boolean
  receiveMarketingInformationYn?: boolean
  sn?: number
  startDateTime?: string
  subTitle?: string
  subscribeYn?: boolean
  thumbnailUid?: string
  timeTitle?: string
  title?: string
  videoChatCode?: string
  videoChatCodeYn?: boolean
  videoCode?: string
}

export interface OnAirListRq {
  currentPage: number
  pageSize: number
}

export interface OnAirListRs {
  onAirs?: OnAirListRsDto[]
}

export interface OnAirListRsDto {
  broadcastStatus?: string
  companyName?: string
  companySn?: number
  createdDateTime?: string
  endDateTime?: string
  eventUrl?: string
  eventYn?: boolean
  exposureName?: string
  keyword?: string
  mobileThumbnailUid?: string
  onAirSn?: number
  openYn?: boolean
  startDateTime?: string
  subTitle?: string
  thumbnailUid?: string
  timeTitle?: string
  title?: string
}

export interface OnAirPagingListRs {}

export interface PageUtil {
  blockSize?: number
  currentPage?: number
  lastPage?: number
  maxRows?: number
  pageSize?: number
  recordCount?: number
  skipRows?: number
}

export interface PopupListItemDto {
  link?: string
  linkYn?: boolean
  mobileImage?: FileDto
  pcImage?: FileDto
  sn?: number
  title?: string
  todayCloseYn?: boolean
}

export interface PopupListRs {
  popupList?: PopupListItemDto[]
}

export interface PostDetailsRs {
  bannerImage?: FileDto
  categoryType?: string
  companyLogoImage?: FileDto
  companyName?: string
  companySn?: number
  contents?: string
  createdDateTime?: string
  exposureName?: string
  mobileThumbnailImage?: FileDto
  pcThumbnailImage?: FileDto
  postAuthType: string
  postSn?: number
  subTitle?: string
  title?: string
}

export interface PostDto {
  applicantCompanySn: number
  bannerImage: FileDto
  categorySn: number
  contents: string
  mobileThumbnailImage: FileDto
  openYn: boolean
  pcThumbnailImage: FileDto
  postAuthType: "ALL" | "USER"
  postSn: number
  recommendYn: boolean
  subTitle: string
  title: string
}

export interface PostRelationDto {
  jobName?: string
  jobPostName?: string
  jobPostSn?: number
}

export interface PostRelationListRq {
  jobPostSn?: number
}

export interface PostRelationListRs {
  relationPosts?: PostRelationDto[]
}

export interface ProfileAcademyDto {
  academicDegree:
    | "ASSOCIATE"
    | "BACHELOR"
    | "MASTER_CANDIDATE"
    | "MASTER"
    | "DOCTORAL_CANDIDATE"
    | "DOCTORAL"
  academyName: string
  academyType: "COLLEGE" | "GRADUATESCHOOL"
  majors: ProfileAcademyMajorDto[]
}

export interface ProfileAcademyMajorDto {
  major: string
  majorClass: MajorGroupSimpleDto
  majorDivision: MajorGroupSimpleDto
  majorGroup: MajorGroupSimpleDto
  majorSection: MajorGroupSimpleDto
  majorType: "MAJOR" | "MINOR" | "PLURAL"
}

export interface ProfileAcademyMajorSaveDto {
  major: string
  majorClassSn: number
  majorDivisionSn: number
  majorGroupSn: number
  majorSectionSn: number
  majorType: "MAJOR" | "MINOR" | "PLURAL"
}

export interface ProfileAcademySaveDto {
  academicDegree:
    | "ASSOCIATE"
    | "BACHELOR"
    | "MASTER_CANDIDATE"
    | "MASTER"
    | "DOCTORAL_CANDIDATE"
    | "DOCTORAL"
  academyName: string
  academyType: "COLLEGE" | "GRADUATESCHOOL"
  majors: ProfileAcademyMajorSaveDto[]
}

export interface ProfileDto {
  academies: ProfileAcademyDto[]
  birthYear: number
  createdDateTime: string
  educationLevel:
    | "HIGHSCHOOL"
    | "ASSOCIATE"
    | "BACHELOR"
    | "MASTER_CANDIDATE"
    | "MASTER"
    | "DOCTORAL_CANDIDATE"
    | "DOCTORAL"
  examinations: ProfileExaminationDto[]
  expectedSalary: number
  huntingJobsYn: boolean
  jobs: ProfileSystemJobDto[]
  lastModifiedDateTime: string
  licenses: ProfileLicenseDto[]
  locations: LocationDto[]
}

export interface ProfileExaminationDto {
  code: string
  gradeCode: string
  gradeName: string
  name: string
  score: number
}

export interface ProfileLicenseDto {
  code: string
  name: string
}

export interface ProfileRs {
  emailVerification?: AccountVerificationDto
  ipinVerification?: AccountVerificationDto
  jobGroupName?: string
  jobGroupSn?: number
  jobName?: string
  jobSn?: number
  mobile?: string
  name?: string
  profileImageUid?: string
  profileImageUrl?: string
  smsVerification?: AccountVerificationDto
  username?: string
}

export interface ProfileSaveRq {
  academies: ProfileAcademySaveDto[]
  birthYear: number
  educationLevel:
    | "HIGHSCHOOL"
    | "ASSOCIATE"
    | "BACHELOR"
    | "MASTER_CANDIDATE"
    | "MASTER"
    | "DOCTORAL_CANDIDATE"
    | "DOCTORAL"
  examinations: ProfileExaminationDto[]
  expectedSalary: number
  licenses: ProfileLicenseDto[]
  locationSns: number[]
  systemJobSns: number[]
}

export interface ProfileStep1SaveRq {
  birthYear: number
  expectedSalary: number
  locationSns: number[]
  systemJobSns: number[]
}

export interface ProfileStep2SaveRq {
  academies: ProfileAcademySaveDto[]
  educationLevel:
    | "HIGHSCHOOL"
    | "ASSOCIATE"
    | "BACHELOR"
    | "MASTER_CANDIDATE"
    | "MASTER"
    | "DOCTORAL_CANDIDATE"
    | "DOCTORAL"
}

export interface ProfileStep3SaveRq {
  examinations: ProfileExaminationDto[]
  licenses: ProfileLicenseDto[]
}

export interface ProfileSystemJobDto {
  jobGroupName: string
  jobGroupSn: number
  jobName: string
  jobSn: number
}

export interface QualificationDto {
  description?: string
  educationLevel?: string
  experience?: string
  majorList?: string[]
  skillList?: string[]
}

export interface ReceiveMarketingInformationDto {
  receiveMarketingInformationAgreeDateTime?: string
  receiveMarketingInformationYn?: boolean
}

export interface RecentlyPostsRs {
  companies?: CompanyPostDto[]
}

export interface RecommendPostDto {
  companyName?: string
  companySn?: number
  createdDateTime?: string
  exposureName?: string
  mobileThumbnailImage?: FileDto
  pcThumbnailImage?: FileDto
  sn?: number
  subTitle?: string
  title?: string
}

export interface RecommendPostsRs {
  posts?: RecommendPostDto[]
}

export interface RecruitClassCodeDto {
  count?: number
  name?: string
}

export interface RedirectView {
  applicationContext?: ApplicationContext
  attributesMap?: {}
  beanName?: string
  contentType?: string
  exposePathVariables?: boolean
  hosts?: string[]
  propagateQueryProperties?: boolean
  redirectView?: boolean
  requestContextAttribute?: string
  staticAttributes?: {}
  url?: string
}

export interface RegisterRq {
  agreePrivacyPolicyYn: boolean
  mobile: string
  name: string
  password: string
  receiveMarketingInformationYn: boolean
  username: string
}

export interface RegisterRs {
  sn?: number
  username?: string
}

export interface RegisterSocialRq {
  agreePrivacyPolicyYn: boolean
  clientId: string
  clientType: string
  mobile: string
  name: string
  receiveMarketingInformationYn: boolean
  username: string
}

export interface RequestMobileAuthRq {
  mobile?: string
  username?: string
}

export interface RequestMobileAuthRs {
  successYn?: boolean
}

export interface ResumeAccountTypeRq {
  email: string
}

export interface ResumeAccountTypeRs {
  joinYn: boolean
  type: "NORMAL" | "SOCIAL"
}

export interface ResumeAgreeRq {
  jobPostSn: number
  resumeSn: number
}

export interface ResumeAgreementDataRq {
  email?: string
  jobPostSn: number
}

export interface ResumeAgreementDataRs {
  applyAgreementLetterUrl: string
  companyName: string
  email: string
  joinYn: boolean
  mobile: string
  name: string
  period: string
  personalResumeItems: string[]
  realNameCheckInfo: ResumeVerificationDto
  sensitiveInfoResumeItems: string[]
}

export interface ResumeCheckYBMResponseRs {
  checkYBMResponse?: boolean
}

export interface ResumeDeleteForeignExamRq {
  languageExamSn?: number
  resumeSn?: number
}

export interface ResumeDeleteRq {
  resumeSn?: number
}

export interface ResumeItemSnDto {
  children?: ResumeItemSnDto[]
  resumeItemSn: number
}

export interface ResumeLoadDto {
  companyName: string
  jobPostName: string
  jobPostSn: number
  resumeSn: number
}

export interface ResumeNoticePopupDto {
  contents?: string
  createSubjectName?: string
  createSubjectSn?: number
  exposurePageCode?: string
  exposureSiteCode?: string
  exposureStatusCode?: string
  hasInterview?: boolean
  heightSize?: number
  imageFileUid?: string
  imageFileUrl?: string
  imageLinkUrl?: string
  imageUploadYn?: boolean
  jobnoticeSnList?: number[]
  leftPosition?: number
  popupSn?: number
  postClosingDatetime?: string
  postStartDatetime?: string
  recruitfieldSnList?: number[]
  systemKindCodeList?: string[]
  title?: string
  topPosition?: number
  widthSize?: number
}

export interface ResumeNoticePopupEndRq {
  jobPostSn?: number
  jobflexResumeSn?: number
}

export interface ResumeNoticePopupRq {
  jobPostSn?: number
}

export interface ResumeNoticePopupRs {
  noticePopupList?: ResumeNoticePopupDto[]
}

export interface ResumeSaveStepRs {
  successYn?: boolean
}

export interface ResumeVerificationDto {
  emailUseYn?: boolean
  ipinUseYn?: boolean
  smsUseYn?: boolean
  useYn: boolean
  verificationYn?: boolean
}

export interface ResumeWriteRq {
  agreePrivacyPolicyYn: boolean
  applyAgreementLetterYn: boolean
  ci?: string
  di?: string
  email?: string
  jobPostSn: number
  mobile: string
  name: string
  password?: string
  receiveMarketingInformationYn: boolean
  resumePassword?: string
  verificationType?: "SMS" | "IPIN" | "EMAIL"
}

export interface ResumeWriteRs {
  result: "CREATED" | "WRITING" | "SUBMITTED" | "DUPLICATED" | "EXIST" | "REGISTERED_MANAGER"
  resumeSn: number
}

export interface SaveAccountVerificationRq {
  ci?: string
  di?: string
  verificationType: string
}

export interface SaveAnswersRq_LikertAnswerDto_ {
  answerList?: LikertAnswerDto[]
}

export interface SaveAnswersRq_NbackAnswerDto_ {
  answerList?: NbackAnswerDto[]
}

export interface SaveAnswersRq_SstPartAnswerDto_ {
  answerList?: SstPartAnswerDto[]
}

export interface SaveAnswersRq_StroopAnswerDto_ {
  answerList?: StroopAnswerDto[]
}

export interface SaveExamineeLogRq {
  statusKindCode?: string
  step?: string
}

export interface SaveSubmitOathRs {
  successYn: boolean
}

export interface ScreeningAnnouncementNotificationDto {
  accessTime?: string
  companyLogo?: ExamFileDto
  companyName?: string
  companySn?: number
  guidanceMethodSn?: number
  guidanceName?: string
  jobPostSn?: number
  jobPostTitle?: string
  jobflexResumeSn?: number
  notificationSn?: number
  postStartDateTime?: string
  screeningResumeSn?: number
}

export interface ScreeningProcessDto {
  processName?: string
  processType?: string
}

export interface SimpleResumeItemDto {
  children?: SimpleResumeItemDto[]
  resumeItemName: string
  resumeItemSn: number
}

export interface SituationDetailQuestionDto {
  contents?: string
  readyTime?: number
  replyTime?: number
  resolveYn?: boolean
  v3QnaSituationSn?: number
}

export interface SituationQuestionDto {
  jobGroupCode?: string
  limitTime?: number
  partNumber?: number
  questionList?: SituationDetailQuestionDto[]
  questionSn?: number
  resolveYn?: boolean
  useYn?: boolean
  v3JobQnaSituationSn?: number
  v3QnaSituationSn?: number
}

export interface SstAnswerDto {
  answer?: string
  direction?: string
  questionSn?: number
  resolveTime?: number
  response?: boolean
  rt?: number
  timeoutYn?: boolean
}

export interface SstPartAnswerDto {
  part?: number
  questionList?: SstAnswerDto[]
}

export interface StroopAnswerDto {
  answer?: string
  color?: string
  expectation?: boolean
  input?: boolean
  level?: string
  meaning?: string
  questionSn?: number
  resolveTime?: number
  response?: boolean
  rt?: number
  timeoutYn?: boolean
  word?: string
}

export interface SubmitResultDto {
  jobPostSn?: number
  resumeSn?: number
}

export interface SubmitResultRq {
  submitResultDtos?: SubmitResultDto[]
}

export interface SubmittedResumeListRs {
  resumeList: ResumeLoadDto[]
}

export interface SuccessRs {
  successYn?: boolean
}

export interface SystemJobDto {
  jobDetails: string[]
  jobName: string
  jobSn: number
}

export interface SystemJobGroupDto {
  jobGroupName: string
  jobGroupSn: number
  jobs: SystemJobDto[]
}

export interface TermsDto {
  contents?: string
  effectiveDateTime?: string
  noticeDateTime?: string
  termsSn?: number
  title?: string
  version?: number
}

export interface TermsListRs {
  terms?: TermsDto[]
}

export interface TermsRs {
  contents?: string
  effectiveDateTime?: string
  noticeDateTime?: string
  termsSn?: number
  title?: string
  version?: number
}

export interface UpdatePasswordRq {
  newPassword?: string
}

export interface ValidateMobileRq {
  mobile: string
}

export interface ValidateMobileRs {
  validateYn?: boolean
}

export interface ValidateUsernameRq {
  username?: string
}

export interface ValidateUsernameRs {
  accountType?: string
  clientType?: string
  validateYn?: boolean
}
