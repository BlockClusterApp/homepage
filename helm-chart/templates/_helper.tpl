{{- define "server.name" -}}
{{ "server" }}-{{ .Values.NODE_ENV}}
{{- end -}}

{{- define "server.image-tag" -}}
{{ .Values.NODE_ENV }}-{{ .Values.server.commitHash }}
{{- end -}}

{{- define "server.namespace" }}
{{- if -eq  .Values.NODE_ENV "production" -}}
default
{{- else if -eq  .Values.NODE_ENV "test" -}}
test
{{- else if -eq  .Values.NODE_ENV "staging" -}}
staging
{{- else -}}
dev
{{- end -}}
{{- end -}}

{{- define "server.app" -}}
"blockcluster-web"
{{- end -}}


{{- define "server.maxReplicas" }}
{{- if -eq  .Values.NODE_ENV "production" -}}
{{ .Values.server.production.maxReplicas }}
{{- else if -eq  .Values.NODE_ENV "test" -}}
{{ .Values.server.test.maxReplicas }}
{{- else if -eq  .Values.NODE_ENV "staging" -}}
{{ .Values.server.staging.maxReplicas }}
{{- else -}}
{{ .Values.server.dev.maxReplicas }}
{{- end -}}
{{- end -}}


{{- define "server.minReplicas" }}
{{- if -eq  .Values.NODE_ENV "production" -}}
{{ .Values.server.production.minReplicas }}
{{- else if -eq  .Values.NODE_ENV "test" -}}
{{ .Values.server.test.minReplicas }}
{{- else if -eq  .Values.NODE_ENV "staging" -}}
{{ .Values.server.staging.minReplicas }}
{{- else -}}
{{ .Values.server.dev.minReplicas }}
{{- end -}}
{{- end -}}