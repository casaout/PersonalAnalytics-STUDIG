import { StudyConfiguration } from './StudyConfiguration';

const studyConfig: StudyConfiguration = {
  name: 'STUDIG – Student Digital Device Use Study',
  shortDescription: '<p><strong>Der digitale Arbeitsplatz und die Wissensarbeit im Studium sind bislang wenig erforscht.</strong> Ziel dieser Studie ist es, anhand anonymisierter Verhaltensdaten ein erstes Verständnis der Laptop- und Computernutzung im Studium zu entwickeln. Dafür bitten wir Sie, die an der Universität Zürich entwickelte Software "PersonalAnalytics" auf Ihrem Hauptarbeitsgerät zu installieren.</p><p><strong>Was macht PersonalAnalytics?</strong> PersonalAnalytics erfasst App-Nutzungsdaten (z.B. Start- und Endzeiten sowie App-Namen, jedoch keine Inhalte), aggregierte Eingabedaten (wie Tastatur- und Mausbewegungen, kein Keylogging), und in regelmässigen Abständen kurze Befindlichkeitsabfragen (Experience Sampling). Alle erhobenen Daten werden <strong>ausschliesslich lokal</strong> auf Ihrem Gerät gespeichert und sind nur für Sie sichtbar.</p><p><strong>Datenspende:</strong> Nach ca. 3, 6 und 9 Wochen bitten wir Sie, Ihre Daten anonymisiert für die Forschung zu spenden. Die Teilnahme und Datenspende sind selbstverständlich freiwillig, und Ihre Anonymität ist zu jedem Zeitpunkt sichergestellt.</p>',  
  infoUrl: 'https://mydata-lab.uzh.ch/de/studien/STUDIG.html',
  privacyPolicyUrl: 'https://mydata-lab.uzh.ch/de/studien/STUDIG.html',
  uploadUrl: 'https://hasel.dev/studig-upload',
  contactName: 'Dr. Malte Doehne, Christopher Vantis, Dr. André Meyer',
  contactEmail: 'studig@meine-daten.ch',
  subjectIdLength: 6,
  dataExportEnabled: true,
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
      intervalInMs: 1000 * 60 * 60 * 3,  // 3 hours
      samplingRandomization: 0.1 // 10% randomization, so the interval will be between 2.7 and 3.3 hours
    }
  }
};
export default studyConfig;
