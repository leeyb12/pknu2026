#!/bin/bash

# 설정 파일 등 환경변수 적용 상태 확인을 위해 출력을 켭니다.
set -e

echo "========================================="
echo " Starting Hadoop Service as: $NODE_TYPE"
echo "========================================="

if [ "$NODE_TYPE" = "namenode" ]; then
    # NameNode 메타데이터 디렉토리 내에 current 폴더가 없으면 포맷되지 않은 상태임
    if [ ! -d "/hadoop/dfs/name/current" ]; then
        echo "[HADOOP] First-time startup detected. Formatting NameNode..."
        $HADOOP_HOME/bin/hdfs namenode -format -force
    else
        echo "[HADOOP] NameNode already formatted. Skipping format."
    fi
    echo "[HADOOP] Launching NameNode..."
    exec $HADOOP_HOME/bin/hdfs namenode

elif [ "$NODE_TYPE" = "datanode" ]; then
    echo "[HADOOP] Launching DataNode..."
    # NameNode가 구동될 때까지 약간 대기 후 실행 (네트워크 동기화 편의성)
    sleep 3
    exec $HADOOP_HOME/bin/hdfs datanode

else
    echo "[ERROR] Invalid or missing NODE_TYPE environment variable."
    echo "Please set NODE_TYPE to 'namenode' or 'datanode'."
    exit 1
fi
