FROM eclipse-temurin:8-jdk

# Hadoop 다운로드 및 부가 도구 설치를 위한 패키지 설치
RUN apt-get update && apt-get install -y curl procps && rm -rf /var/lib/apt/lists/*

# Hadoop 환경 설정 변수 정의
ENV HADOOP_VERSION=3.3.6
ENV HADOOP_HOME=/opt/hadoop
ENV PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin

# Hadoop 3.3.6 다운로드 및 압축 해제
RUN curl -O https://archive.apache.org/dist/hadoop/common/hadoop-$HADOOP_VERSION/hadoop-$HADOOP_VERSION.tar.gz && \
    tar -xzf hadoop-$HADOOP_VERSION.tar.gz -C /opt && \
    mv /opt/hadoop-$HADOOP_VERSION $HADOOP_HOME && \
    rm hadoop-$HADOOP_VERSION.tar.gz

# Hadoop 내부 스크립트가 Java 경로를 정상적으로 찾을 수 있도록 명시적 적용
RUN echo "export JAVA_HOME=$JAVA_HOME" >> $HADOOP_HOME/etc/hadoop/hadoop-env.sh

# 컨테이너 외부 설정 파일을 복사
COPY core-site.xml $HADOOP_HOME/etc/hadoop/core-site.xml
COPY hdfs-site.xml $HADOOP_HOME/etc/hadoop/hdfs-site.xml

# NameNode 및 DataNode가 로컬 디렉토리로 사용할 HDFS 볼륨 폴더 생성
RUN mkdir -p /hadoop/dfs/name /hadoop/dfs/data

# 진입 스크립트 복사 및 실행 권한 부여
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 9870: NameNode Web UI 포트
# 9000: NameNode RPC 포트 (통신용)
# 9864: DataNode Web UI 포트
EXPOSE 9870 9000 9864

ENTRYPOINT ["/entrypoint.sh"]
