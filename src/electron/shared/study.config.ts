import { StudyConfiguration } from './StudyConfiguration';

const studyConfig: StudyConfiguration = {
  name: 'STUDIG – Student Digital Device Use Study',
  shortDescription:
    '<p><strong>Der digitale Arbeitsplatz und die Wissensarbeit im Studium sind bislang wenig erforscht.</strong> Ziel dieser Studie ist es, anhand anonymisierter Verhaltensdaten ein erstes Verst&auml;ndnis der Laptop- und Computernutzung im Studium zu entwickeln. Daf&uuml;r bitten wir Sie, die an der Universit&auml;t Z&uuml;rich entwickelte Software &bdquo;PersonalAnalytics&ldquo; auf Ihrem Hauptarbeitsger&auml;t zu installieren.</p><p><strong>Was macht PersonalAnalytics?</strong> PersonalAnalytics erfasst App-Nutzungsdaten (z.B. Start- und Endzeiten sowie App-Namen, jedoch keine Inhalte), aggregierte Eingabedaten (wie Tastatur- und Mausbewegungen, kein Keylogging), und in regelm&auml;ssigen Abst&auml;nden kurze Befindlichkeitsabfragen (Experience Sampling). Alle erhobenen Daten werden <strong>ausschliesslich lokal</strong> auf Ihrem Ger&auml;t gespeichert und sind nur f&uuml;r Sie sichtbar.</p><p><strong>Datenspende:</strong> Nach ca. 3, 6 und 9 Wochen bitten wir Sie, Ihre Daten anonymisiert f&uuml;r die Forschung zu spenden. Die Teilnahme und Datenspende sind selbstverst&auml;ndlich freiwillig, und Ihre Anonymit&auml;t ist zu jedem Zeitpunkt sichergestellt.</p>',
  infoUrl: 'https://mydata-lab.uzh.ch/STUDIG/overview.html', // todo: create
  privacyPolicyUrl: 'https://mydata-lab.uzh.ch/STUDIG/privacy.html', // todo: create
  uploadUrl: 'https://mydata-lab.uzh.ch/STUDIG/upload.html', // todo: update
  contactName: 'Dr. Malte Doehne, Christopher Vantis, Dr. André Meyer',
  contactEmail: 'christopher.vantis@uzh.ch',
  subjectIdLength: 6,
  dataExportEnabled: false, // todo: re-enable, once we have a 
  trackers: {
    windowActivityTracker: {
      enabled: true,
      intervalInMs: 1000,
      trackUrls: true,
      trackWindowTitles: true
    },
    userInputTracker: {
      enabled: true,
      intervalInMs: 5000
    },
    experienceSamplingTracker: {
      enabled: true,
      scale: 7,
      questions: [
        'Ich bin gerade sehr produktiv.',
        'Ich fühle mich gerade motiviert, meine Aufgaben zu erledigen.',
        'Ich fühle mich gerade von der Arbeit am Rechner überwältigt.',
        'Ich fühle mich gerade ruhig und gefasst bei der Arbeit.',
        'Ich arbeite gerade an wichtigen Aufgaben.',
        'Ich fühle mich gerade konzentriert.',
        'Ich bin gerade von meiner Arbeit am Rechner gestresst.',
        'Ich erlebe gerade Momente der Frustration.',
        'Ich geniesse die Aufgaben, an denen ich gerade arbeite.',
        'Ich kann mich gerade ohne Ablenkungen konzentrieren.',
        'Ich finde meine Arbeit gerade intellektuell anregend.',
        'Ich habe gerade Schwierigkeiten, mich auf meine Aufgaben zu konzentrieren.',
        'Ich fühle mich gerade geistig erschöpft.',
        'Ich fühle mich gerade geistig scharf und wach.',
        'Ich finde meine Arbeit gerade langweilig.',
        'Ich nutze meine Zeit gerade effektiv.',
        'Ich schliesse gerade die Aufgaben ab, die ich mir vorgenommen habe.',
        'Ich fühle mich gerade gehetzt, meine Arbeit zu beenden.',
        'Ich fühle mich gerade geistig erfrischt.',
        'Ich habe gerade das Bedürfnis nach einer Pause. '
      ],
      responseOptions: [
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
      ],
      intervalInMs: 1000 * 60 * 60 * 5,  // 5 hours
      samplingRandomization: 0.1 // 10% randomization, so the interval will be between 2.7 and 3.3 hours
    }
  }
};
export default studyConfig;
