declare namespace Store {
  interface Shortcut {
    name: string,
    selected: boolean,
    escapedName?: string,
    image?: string,
    data?: Uint8Array,
    size?: number
  }

  interface Snippet {
    name: string,
    isClipboard: boolean,
    newShortcut: string,
    numberOfActions: number,
    uuids: {
      groups: string[],
      vars: string[]
    }
    actions: object[]
  }

  interface Insert {
    id: number,
    name: string,
    isClipboard: boolean,
    position: number
  }

  interface ProcessResult {
    warnings: string[],
    nItems: number,
    shortcuts: {
      name: string,
      actionsToRemove: number[],
      uuids: {
        groups: string[],
        vars: string[]
      },
      inserts: Insert[],
      snippets: Snippet
    }[]
  }

  interface Globals {
    functionDefinition: string,
    noSnippetName: string
  }

  interface Preferences {
    autoOpenApp: boolean,
    excludeAllCPAComments: boolean,
    cleanUp: 0 | 1 | 2,
    commentMarker: string,
    defaultNewShortcutName: string,
    includeShortcutImages: boolean,
    codeZoom: number,
    switchCaption: boolean,
    ignoreVersion: false | string,
    skipFoundInsertsOnNoInsert: boolean
  }
  interface AppSettings {
    "Shortcut Name": string,
    "Version": string,
    "RoutineHub ID": number,
    "Storage": string,
    "Preferences Version": number,
    "Default Preferences": Preferences,
    "iOS Version": string,
    "Preferences": Preferences,
    "componentToDisplay": string
  }

  interface UpdateData {
    version: string,
    url: string,
    notes: string,
    release: Date
  }
  type UpdateAvailable = false | UpdateData;

  interface ShortcutsToImport {
    name: string,
    url: string,
    image: string,
    done: boolean
  }

  interface ICloudUrl {
    name: string,
    url: string,
    date: Date
  }
  interface ICloudShortcut extends ICloudUrl {
    image: string
  }
}

declare namespace ButtonBar {
  interface Button {
    text: string,
    class: string,
    icon: string | { component: string },
    iconOptions?: object,
    disabled?: boolean,
    click?: Function
  }
}

declare namespace MenuList {
  interface MenuItem {
    title: string,
    description: string,
    icon: string | { component: string },
    iconColor?: string,
    iconOptions?: object,
    click: () => void
  }
}
