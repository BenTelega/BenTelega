import { useEffect, useState, useCallback } from 'react';

// Telegram Web App types
export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    query_id?: string;
    user?: TelegramUser;
    receiver?: TelegramUser;
    chat?: {
      id: number;
      type: 'private' | 'group' | 'supergroup' | 'channel';
      title?: string;
      username?: string;
      photo_url?: string;
    };
    chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date: number;
    hash: string;
  };
  version: string;
  platform: string;
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
    header_bg_color?: string;
    accent_text_color?: string;
    section_bg_color?: string;
    section_header_text_color?: string;
    subtitle_text_color?: string;
    destructive_text_color?: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  isClosingConfirmationEnabled: boolean;
  BackButton: {
    isVisible: boolean;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
    setParams: (params: { text?: string; color?: string; text_color?: string; is_active?: boolean; is_visible?: boolean }) => void;
  };
  SecondaryButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    position: 'left' | 'right' | 'top' | 'bottom';
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
    setParams: (params: { text?: string; color?: string; text_color?: string; is_active?: boolean; is_visible?: boolean; position?: 'left' | 'right' | 'top' | 'bottom' }) => void;
  };
  SettingsButton: {
    isVisible: boolean;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
  };
  HapticFeedback: {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
    selectionChanged: () => void;
  };
  CloudStorage: {
    setItem: (key: string, value: string, callback?: (error: Error | null, result?: boolean) => void) => void;
    getItem: (key: string, callback?: (error: Error | null, result?: string) => void) => void;
    getItems: (keys: string[], callback?: (error: Error | null, result?: Record<string, string>) => void) => void;
    removeItem: (key: string, callback?: (error: Error | null, result?: boolean) => void) => void;
    removeItems: (keys: string[], callback?: (error: Error | null, result?: boolean) => void) => void;
    getKeys: (callback?: (error: Error | null, result?: string[]) => void) => void;
  };
  BiometricManager: {
    isInited: boolean;
    isBiometricAvailable: boolean;
    biometricType: 'finger' | 'face' | 'unknown';
    isAccessRequested: boolean;
    isAccessGranted: boolean;
    isBiometricTokenSaved: boolean;
    deviceId: string;
    init: (callback?: () => void) => void;
    requestAccess: (params: { reason?: string }, callback?: (isAccessGranted: boolean) => void) => void;
    authenticate: (params: { reason?: string }, callback?: (isAuthenticated: boolean, biometricToken?: string) => void) => void;
    updateBiometricToken: (token: string, callback?: (isUpdated: boolean) => void) => void;
    openSettings: () => void;
  };
  ready: () => void;
  expand: () => void;
  close: (options?: { return_back?: boolean }) => void;
  enableClosingConfirmation: () => void;
  disableClosingConfirmation: () => void;
  setHeaderColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
  setBottomBarColor: (color: string) => void;
  sendData: (data: string) => void;
  switchInlineQuery: (query: string, choose_chat_types?: ('users' | 'bots' | 'groups' | 'channels')[]) => void;
  openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
  openTelegramLink: (url: string) => void;
  openInvoice: (url: string, callback?: (status: 'paid' | 'cancelled' | 'failed' | 'pending') => void) => void;
  showPopup: (params: {
    title?: string;
    message: string;
    buttons?: Array<{ id?: string; type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'; text: string }>;
  }, callback?: (buttonId: string) => void) => void;
  showAlert: (message: string, callback?: () => void) => void;
  showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
  showScanQrPopup: (params: { text?: string }, callback?: (data: string) => boolean | void) => void;
  closeScanQrPopup: () => void;
  readTextFromClipboard: (callback?: (text: string) => void) => void;
  requestWriteAccess: (callback?: (access: boolean) => void) => void;
  requestContact: (callback?: (contact: { user_id: number; phone_number: string; first_name: string; last_name?: string } | null) => void) => void;
  requestFullscreen: () => void;
  exitFullscreen: () => void;
  lockOrientation: () => void;
  unlockOrientation: () => void;
  addToHomeScreen: () => void;
  checkHomeScreenStatus: (callback?: (status: 'added' | 'missed' | 'unknown') => void) => void;
  onEvent: (eventType: 'themeChanged' | 'viewportChanged' | 'mainButtonClicked' | 'secondaryButtonClicked' | 'backButtonClicked' | 'settingsButtonClicked' | 'invoiceClosed' | 'popupClosed' | 'qrTextReceived' | 'scanQrPopupClosed' | 'clipboardTextReceived' | 'writeAccessRequested' | 'contactRequested' | 'biometricManagerUpdated' | 'biometricAuthRequested' | 'biometricTokenUpdated' | 'fullscreenChanged' | 'fullscreenFailed' | 'homeScreenChecked', callback: () => void) => void;
  offEvent: (eventType: string, callback: () => void) => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

// Parse URL search params from initData string
function parseInitData(initData: string): Record<string, unknown> {
  const params = new URLSearchParams(initData);
  const result: Record<string, unknown> = {};
  
  for (const [key, value] of params) {
    try {
      // Try to parse JSON values (like user object)
      result[key] = JSON.parse(value);
    } catch {
      // If not JSON, store as string
      result[key] = value;
    }
  }
  
  return result;
}

// Get user from initData
function getUserFromInitData(initData: string): TelegramUser | null {
  if (!initData) return null;
  
  try {
    const parsed = parseInitData(initData);
    return (parsed.user as TelegramUser) || null;
  } catch (error) {
    console.error('Failed to parse initData:', error);
    return null;
  }
}

export function useTelegram() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [initData, setInitData] = useState<string>('');
  const [initDataUnsafe, setInitDataUnsafe] = useState<Record<string, unknown>>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    if (tg) {
      setWebApp(tg);
      
      // Get user from initDataUnsafe (parsed by Telegram)
      const userFromUnsafe = tg.initDataUnsafe?.user;
      
      // Also try to parse from raw initData string as fallback
      const userFromRaw = getUserFromInitData(tg.initData);
      
      // Use the best available user data
      const finalUser = userFromUnsafe || userFromRaw;
      setUser(finalUser);
      
      setInitData(tg.initData);
      setInitDataUnsafe(tg.initDataUnsafe as Record<string, unknown>);
      
      // Log for debugging
      console.log('🔵 Telegram WebApp initialized');
      console.log('   Platform:', tg.platform);
      console.log('   Version:', tg.version);
      console.log('   User:', finalUser);
      console.log('   initData:', tg.initData ? 'present' : 'missing');
      console.log('   initDataUnsafe:', tg.initDataUnsafe);
      
      // Notify Telegram that the app is ready
      tg.ready();
      
      // Expand to full height
      tg.expand();
      
      setIsReady(true);
    } else {
      console.warn('⚠️ Telegram WebApp not available. Running outside Telegram?');
    }
  }, []);

  // Haptic feedback functions
  const hapticImpact = useCallback((style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') => {
    webApp?.HapticFeedback?.impactOccurred(style);
  }, [webApp]);

  const hapticNotification = useCallback((type: 'error' | 'success' | 'warning' = 'success') => {
    webApp?.HapticFeedback?.notificationOccurred(type);
  }, [webApp]);

  const hapticSelection = useCallback(() => {
    webApp?.HapticFeedback?.selectionChanged();
  }, [webApp]);

  // UI functions
  const showPopup = useCallback((params: {
    title?: string;
    message: string;
    buttons?: Array<{ id?: string; type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'; text: string }>;
  }) => {
    return new Promise<string | undefined>((resolve) => {
      webApp?.showPopup(params, (buttonId) => {
        resolve(buttonId);
      });
    });
  }, [webApp]);

  const showAlert = useCallback((message: string) => {
    return new Promise<void>((resolve) => {
      webApp?.showAlert(message, () => {
        resolve();
      });
    });
  }, [webApp]);

  const showConfirm = useCallback((message: string) => {
    return new Promise<boolean>((resolve) => {
      webApp?.showConfirm(message, (confirmed) => {
        resolve(confirmed);
      });
    });
  }, [webApp]);

  const closeApp = useCallback(() => {
    webApp?.close();
  }, [webApp]);

  const setHeaderColor = useCallback((color: string) => {
    webApp?.setHeaderColor(color);
  }, [webApp]);

  const setBackgroundColor = useCallback((color: string) => {
    webApp?.setBackgroundColor(color);
  }, [webApp]);

  // Cloud Storage helpers
  const cloudStorage = {
    setItem: (key: string, value: string): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        webApp?.CloudStorage?.setItem(key, value, (error, result) => {
          if (error) reject(error);
          else resolve(result || false);
        });
      });
    },
    getItem: (key: string): Promise<string | null> => {
      return new Promise((resolve, reject) => {
        webApp?.CloudStorage?.getItem(key, (error, result) => {
          if (error) reject(error);
          else resolve(result || null);
        });
      });
    },
    removeItem: (key: string): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        webApp?.CloudStorage?.removeItem(key, (error, result) => {
          if (error) reject(error);
          else resolve(result || false);
        });
      });
    },
  };

  return {
    // Core
    webApp,
    user,
    initData,
    initDataUnsafe,
    isReady,
    
    // Haptic
    hapticImpact,
    hapticNotification,
    hapticSelection,
    
    // UI
    showPopup,
    showAlert,
    showConfirm,
    closeApp,
    setHeaderColor,
    setBackgroundColor,
    
    // Storage
    cloudStorage,
    
    // Info
    platform: webApp?.platform || 'unknown',
    version: webApp?.version || 'unknown',
    colorScheme: webApp?.colorScheme || 'light',
    themeParams: webApp?.themeParams || {},
    viewportHeight: webApp?.viewportHeight || 0,
    viewportStableHeight: webApp?.viewportStableHeight || 0,
    isExpanded: webApp?.isExpanded || false,
  };
}

export default useTelegram;
