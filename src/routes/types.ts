import { IconType } from "react-icons"

export type TypeRoutesSubMenu = {
    name: string
    path: string
    component: any
    config: {
        permession: string | "*"
        icon?: IconType
        structure: 'layout' | 'extraLayout'
        isMenu: boolean
        for_roles?: Array<string>
    }
}

type a<T> = T & {submenu?: T[], extra_menu?: T[]}


type b<T> = T & {submenu?: a<T>[], extra_menu?: a<T>[]}

export type TypeRoutes = b<TypeRoutesSubMenu>