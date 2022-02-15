import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'service/apiEndpoints'
import { authQueryFnFactory } from 'service/restRequests'

type SupportRequest = {
  id: string
  personId: string
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
  comment: string
  associationMember: boolean
  benefactorCampaign: boolean
  benefactorPlatform: boolean
  companyOtherText: string
  companySponsor: boolean
  companyVolunteer: boolean
  partnerBussiness: boolean
  partnerNpo: boolean
  partnerOtherText: string
  roleAssociationMember: boolean
  roleBenefactor: boolean
  roleCompany: boolean
  rolePartner: boolean
  roleVolunteer: boolean
  volunteerBackend: boolean
  volunteerDesigner: boolean
  volunteerDevOps: boolean
  volunteerFinancesAndAccounts: boolean
  volunteerFrontend: boolean
  volunteerLawyer: boolean
  volunteerMarketing: boolean
  volunteerProjectManager: boolean
  volunteerQa: boolean
  volunteerSecurity: boolean
}

export function useSupportRequestList() {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<SupportRequest[]>(
    endpoints.support.supportRequestList.url,
    authQueryFnFactory<SupportRequest[]>(keycloak?.token),
  )
}

export async function prefetchSupportRequestList(client: QueryClient, token?: string) {
  await client.prefetchQuery<SupportRequest[]>(
    endpoints.support.supportRequestList.url,
    authQueryFnFactory<SupportRequest[]>(token),
  )
}
